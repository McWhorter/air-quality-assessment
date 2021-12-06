import React from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'
import { getCity } from '../utils/fetch'
import Result from './Result'

const FormComponent = ({ label = 'Enter a city' }) => {
  const [city, setCity] = React.useState('')
  const [state, setState] = React.useState({
    data: false,
    error: false,
    loading: false,
  })

  // Deconstruct the state object.
  const { data, error, loading } = state

  // Manage the form submission event.
  const handleSubmit = event => {
    const cityValue = event.target.city.value
    if (cityValue) {
      // Set the requested city value.
      setCity(cityValue)
    } else {
      // Set an error since the value is empty.
      setState({ error: `Please enter a city.` })
    }
  }

  // Update our `state` object if the `city` state changes.
  React.useEffect(() => {
    // Quit if the city value is empty.
    if (!city) {
      return
    }

    // Set the form to loading.
    setState({ loading: true })

    // Use the fetch utility to grab the requested city data.
    getCity(city).then(response => {
      if (response.results) {
        setState({ data: response.results[0], loading: false })
      } else {
        setState({ error: response.error.message, loading: false })
      }
    })
  }, [city])

  return (
    <Form onSubmit={handleSubmit} loading={loading}>
      <Form.Input name="city" label={label} placeholder="eg. Tallahassee, or Salt Lake City" error={error} fluid />
      { data ? <Result cardData={data} /> : false }
      {/* <Button primary content="Fetch data" fluid /> */}
      <Button animated="vertical" primary fluid>
        <Button.Content visible content="Fetch data" />
        <Button.Content hidden content={<Icon name="shipping fast" />} />
      </Button>
    </Form>
  )
}

export default FormComponent
