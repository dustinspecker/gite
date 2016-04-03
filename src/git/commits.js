import {spawnSync} from 'child_process'

module.exports = () =>
  spawnSync('git', ['rev-list', 'head'])
    .stdout
    .toString()
    .split('\n')
    .filter(str => str !== '')
