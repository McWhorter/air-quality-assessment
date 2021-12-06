import React from 'react'
import Card from './Card'

const ResultComponent = ({cardData}) => {
  const [data, setData] = React.useState({
    city: null,
    country: null,
    location: null,
    measurements: [],
  })

  React.useEffect(() => {
    setData(cardData)
  }, [cardData])

  return (
    <>
      <Card {...data} />
    </>
  )
}

export default ResultComponent
