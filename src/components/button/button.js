import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.css'

export default class Button extends React.Component {
  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

/** Props **/

Button.defaultProps = {
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
}