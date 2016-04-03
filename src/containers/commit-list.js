'use strict'
import connect from 'deku-redux-connect'
import {li, ul} from 'dscript-deku'
import {PropTypes, validate} from 'deku-prop-types'

const commitList = ({props}) =>
  ul(
    props.commits.map(commit =>
      li([commit])
    )
  )

commitList.propTypes =
  { commits: PropTypes.arrayOf(PropTypes.string)
  }

const mapStateToProps = ({commits}) =>
  ({commits})

export default connect(
  mapStateToProps
)(validate(commitList, 2))
