'use strict'
import test from 'ava'

import * as actions from '../../src/actions/commits'

test('setCommits returns SET_COMMITS action', t => {
  const {commits, type} =
    actions.setCommits(['123', '456'])

  t.is(type, 'SET_COMMITS')
  t.same(commits, ['123', '456'])
})
