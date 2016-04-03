'use strict'
import {fromJS} from 'immutable'
import test from 'ava'

import commitList from '../../src/containers/commit-list'

test('it displays list', t => {
  const model =
    { context:
      { commits:
        fromJS(
          [ '1commit'
          , '2commit'
          , '3commit'
          ]
        )
      }
    }

  const component =
    commitList(model)

  t.is(component.type, 'ul')

  const [child1, child2, child3] = component.children

  t.is(child1.type, 'li')
  t.is(child1.children[0].nodeValue, '1commi')
  t.is(child2.type, 'li')
  t.is(child2.children[0].nodeValue, '2commi')
  t.is(child3.type, 'li')
  t.is(child3.children[0].nodeValue, '3commi')
})
