import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const CardComponent = ({ city, location, country, measurements }) => {
  const gridColumns = measurements.map(({ parameter, value, unit }) => (
    <Grid.Column key={parameter}>
      <p>
        <strong>{parameter}</strong>
        <br />
        {value}{unit}
      </p>
    </Grid.Column>
  ))

  return (
    <Card as="article" fluid>
      <Card.Content>
        <Card.Header>{ city }, { country }</Card.Header>
        <Card.Meta>{ location }</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Grid columns={3} stackable textAlign="center">
          { gridColumns }
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default CardComponent
