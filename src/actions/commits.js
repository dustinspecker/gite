/**
 * create SET_COMMITS action
 * @param {String[]} commits - List of commit SHAs
 * @return {Object} - a SET_COMMITS action with an Immutable.List of SHAs
 */
export const setCommits = commits => (
  { commits
  , type: 'SET_COMMITS'
  }
)
