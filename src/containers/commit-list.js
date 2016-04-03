'use strict'
import connect from 'deku-redux-connect'
import {li, ul} from 'dscript-deku'

const commitList = ({props}) =>
  ul(
    props.commits.map(commit =>
      li([commit])
    )
  )

const mapStateToProps = ({commits}) => ({commits})

export default connect(
  mapStateToProps
)(commitList)
