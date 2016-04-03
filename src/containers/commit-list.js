'use strict'
import connect from 'deku-redux-connect'
import ImmutablePropTypes from 'deku-prop-types-immutable'
import {li, ul} from 'dscript-deku'
import {PropTypes, validate} from 'deku-prop-types'

const commitList = ({props}) =>
  ul(
    props.commits.toJS().map(commit =>
      li([commit.substr(0, 6)])
    )
  )

commitList.propTypes =
  { commits: ImmutablePropTypes.listOf(PropTypes.string)
  }

const mapStateToProps = ({commits}) =>
  ({commits})

export default connect(
  mapStateToProps
)(validate(commitList, 2))
