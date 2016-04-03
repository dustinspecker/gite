'use strict'
import {is, List} from 'immutable'
import test from 'ava'

import {default as commits} from '../../src/reducers/commits'

test('default value of commits is empty List', t => {
  t.true(is(commits(), List()))
})

test('SET_COMMITS sets commits', t => {
  const state =
    List.of('commit1', 'commit2')
  const action =
    { type: 'SET_COMMITS'
    , commits:
      [ 'commit3'
      , 'commit4'
      ]
    }

  const nextState = commits(state, action)

  t.true(is(nextState, List.of('commit3', 'commit4')))
})
