import React from 'react'
import { Header, Segment, Container, Grid, Divider } from 'semantic-ui-react'
import CityForm from './Form'

const MainComponent = () => {
  return (
    <Container>
      <Header as="h1" style={{marginBottom: 30}}>
        Air Quality Comparison Tool
        <Header.Subheader>Powered by <a href="https://www.openaq.org" target="_blank" rel="noopener noreferrer">OpenAQ</a></Header.Subheader>
      </Header>
      <Segment>
        <Grid columns='equal' stackable>
          <Grid.Column>
            <CityForm label="Enter the first city" />
          </Grid.Column>
          <Grid.Column width={1}>
            <Divider vertical>vs.</Divider>
          </Grid.Column>
          <Grid.Column>
            <CityForm label="Enter the second city" />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  )
}

export default MainComponent
