'use strict'
import austin from 'austin'
import proxyquire from 'proxyquire'
import test from 'ava'

test('it logs commits', t => {
  austin.spy(console, 'log')

  const gc = austin.spy().returns('commits')

  proxyquire('../src/',
    { './git/commits': gc
    }
  )

  t.is(gc.callCount(), 1)
  t.true(console.log.calledWith('commits'))
})
