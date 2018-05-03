import React from 'react'
import PropTypes from 'prop-types'
import styles from './grid.css'

export default class Row extends React.Component {
  render() {
    return (
      <div className={styles.row}>
        { this.props.children }
      </div>
    )
  }
}

/** Props **/

Row.defaultProps = {
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}