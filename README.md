# Managing data fetching in a simple way

The main thing to see in this repo is in `/src/views/FetchView/FetchView.js`.

```javascript
const WrappedView = withFetch(dummyActions.asyncAction)(FetchView)

export default connect(mapStateToProps)(WrappedView)
```

The `withFetch` decorator returns a new component that takes care of setting `this.state.loading` when all the promises returned by the async functions are fulfilled. The async actions builders receive the component props in case they need to use them to build specific URLs or something like that.

```javascript
export const asyncAction = (props) => {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      let id = props.params.id
      console.log('-> FIRING SOME ASYNC ACTION RELATED TO ID:', id)
      setTimeout(() => {
        dispatch(setState('fetched value for ' + id))
        resolve('done!')
      }, 3000)
    })
}
```

To avoid the repetition of the pattern `if (this.state.loading) { ... } else { ... }`, I've included to simple components to illustrate possible ways to abstract it: `Loading` and `LoadingCSS`. They are very similar in usage and implementation:

```javascript
<Loading {...this.state}>
  <h1> { this.props.fetchedValue } </h1>
</Loading>
```
