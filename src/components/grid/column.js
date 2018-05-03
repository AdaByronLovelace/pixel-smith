import React from 'react'
import PropTypes from 'prop-types'
import styles from './grid.css'

export default class Column extends React.Component {
  render() {
    return (
      <div className={styles.column}>
        { this.props.children }
      </div>
    )
  }
}

/** Props **/

Column.defaultProps = {
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}