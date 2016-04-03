import {fromJS, List} from 'immutable'

/**
 * Handle commit actions
 * @param {Immutable.List} state - list of commits
 * @param {Object} [action={}] - action to apply
 * @return {Immutable.List} - next state
 */
export default (state = List(), action = {}) => {
  const {commits, type} = action

  if (type === 'SET_COMMITS') {
    return fromJS(commits)
  }

  return state
}
