import { createAction, handleActions } from 'redux-actions'

export const DUMMY_SET_STATE = 'DUMMY_SET_STATE'

export const setState = createAction(DUMMY_SET_STATE)

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

export const actions = { asyncAction }

export default handleActions({
  [DUMMY_SET_STATE]: (state, { payload }) => payload
}, 'empty')
