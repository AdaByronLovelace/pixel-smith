import React from  'react'
import { storiesOf }  from  '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../src/base-styles.css'

storiesOf('General', module)
  .add('something', () => (
    <p>Something</p>
  ))