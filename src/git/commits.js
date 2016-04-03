import {spawnSync} from 'child_process'

export default () =>
  spawnSync('git', ['rev-list', 'head'])
    .stdout
    .toString()
    .split('\n')
    .filter(str => str !== '')
