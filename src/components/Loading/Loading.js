import React from 'react'

export default function Loading (props) {
  if (props.loading) {
    return (<h1> Loading... </h1>)
  } else {
    return (<div>{props.children}</div>)
  }
}

Loading.propTypes = {loading: React.PropTypes.bool,
                     children: React.PropTypes.oneOfType([
                       React.PropTypes.arrayOf(React.PropTypes.node),
                       React.PropTypes.node
                     ])}
