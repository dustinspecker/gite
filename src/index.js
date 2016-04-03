'use strict'
import {createApp} from 'deku'
import creator from 'dscript-deku'

import commitList from './containers/commit-list'
import gitCommits from './git/commits'

const render =
  createApp(document.getElementById('app'))

render(creator(commitList)(), {commits: gitCommits()})
