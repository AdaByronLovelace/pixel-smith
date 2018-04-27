import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  render() {
    const styles = {
      backgroundColor: '#007dff'
    }
    return (
      <button style={styles} onClick={this.props.onClick}>
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