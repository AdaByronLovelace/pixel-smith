import React from  'react'
import { storiesOf }  from  '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../src/base-styles.css'
import { Container, Row, Column} from '../src'

storiesOf('Grid', module)
  .add('Container', () => (
    <Container>container</Container>
  ))
  .add('Row', () => (
    <Container>
      <Row>row</Row>
    </Container>
  ))
  .add('Column', () => (
    <Container>
      <Row>
        <Column>column</Column>
      </Row>
    </Container>
  ))