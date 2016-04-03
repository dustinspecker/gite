'use strict'
import {createApp} from 'deku'
import {createStore, combineReducers} from 'redux'
import creator from 'dscript-deku'

import commitList from './containers/commit-list'
import commitsReducer from './reducers/commits'
import gitCommits from './git/commits'
import {setCommits} from './actions/commits'

const reducers =
  { commits: commitsReducer
  }

const store =
  createStore(combineReducers(reducers))

const render =
  createApp(document.getElementById('app'))

store.subscribe(() => render(creator(commitList)(), store.getState()))

store.dispatch(setCommits(gitCommits()))
