import React from  'react'
import { storiesOf }  from  '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../src/base-styles.css'
import { Button } from '../src'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))