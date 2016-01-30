import React from 'react'
import { connect } from 'react-redux'
import { actions as dummyActions } from 'redux/modules/dummy'
import { withFetch } from 'redux/utils/fetch'

import LoadingCSS from 'components/LoadingCSS/LoadingCSS'
import Loading from 'components/Loading/Loading'

export class FetchView extends React.Component {
  static propTypes = {
    fetchedValue: React.PropTypes.string
  };

  render () {
    return (
      <div>
        <Loading {...this.state}>
          <h1> { this.props.fetchedValue } </h1>
        </Loading>

        <LoadingCSS {...this.state}>
          <h3> Fade in content... </h3>
          <p> { this.props.fetchedValue } </p>
        </LoadingCSS>

        <a href='#' onClick={() => window.location.reload()}>
          Reload
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fetchedValue: state.dummy
})

// Configure the component specifying one or many fetching functions.
// All the fetching logic should reside in the action or action creator
// to keep the component easily testable.
const WrappedView = withFetch(dummyActions.asyncAction)(FetchView)

export default connect(mapStateToProps)(WrappedView)
