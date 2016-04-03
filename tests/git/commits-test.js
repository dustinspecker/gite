'use strict'
import proxyquire from 'proxyquire'
import test from 'ava'

test('it return commit SHAs in current branch', t => {
  const spawnSync = (command, args) => {
    t.is(command, 'git')
    t.same(args, ['rev-list', 'head'])

    const output =
      { stdout: 'hello\nbye\n'
      }

    return output
  }

  const commits = proxyquire('../../src/git/commits',
    /* eslint-disable camelcase */
    { child_process:
    /* eslint-enable camelcase */
      { spawnSync
      }
    }
  )

  t.same(commits.default(), ['hello', 'bye'])
})
