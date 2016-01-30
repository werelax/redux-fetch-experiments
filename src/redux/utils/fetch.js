export const withFetch = (...fetchFns) => {
  return Wrapped => class extends Wrapped {
    constructor (props) {
      super(props)
      this.state = {loading: true}
    }

    componentWillMount () {
      let dispatch = this.props.dispatch
      this.fetchPromise =
        fetchFns.reduce((acc, fn) => acc.then(() => dispatch(fn(this.props))),
                        Promise.resolve(true))
        .then(() => this.setState({loading: false}))
      super.componentWillMount && super.componentWillMount()
    }
  }
}
