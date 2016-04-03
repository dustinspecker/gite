'use strict'
import {createApp} from 'deku'
import creator, {li, ul} from 'dscript-deku'

import gitCommits from './git/commits'

const render =
  createApp(document.getElementById('app'))

const commitList = ({context}) =>
  ul(
    context.commits.map(commit =>
      li([commit])
    )
  )

render(creator(commitList)(), {commits: gitCommits()})
