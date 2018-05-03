import React from 'react'
import PropTypes from 'prop-types'
import styles from './grid.css'

export default class Container extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        { this.props.children }
      </div>
    )
  }
}

/** Props **/

Container.defaultProps = {
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}