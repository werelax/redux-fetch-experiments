import React from 'react'
import classes from './LoadingCSS.scss'

export default function LoadingCSS (props) {
  return (
      <div className={props.loading ? classes['is-loading'] : classes['loaded']}>
      {props.children}
    </div>
  )
}

LoadingCSS.propTypes = {loading: React.PropTypes.bool,
                        children: React.PropTypes.oneOfType([
                          React.PropTypes.arrayOf(React.PropTypes.node),
                          React.PropTypes.node
                        ])}
