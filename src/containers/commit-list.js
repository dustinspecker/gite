'use strict'
import {li, ul} from 'dscript-deku'

export default ({context}) =>
  ul(
    context.commits.map(commit =>
      li([commit])
    )
  )
