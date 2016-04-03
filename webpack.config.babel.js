import {join} from 'path'

const config =
  { devtool: 'cheap-module-source-map'
  , devServer:
    { contentBase: './dist'
    }
  , entry:
    [ './src/index.js'
    ]
  , resolve:
    { extensions:
      [ ''
      , '.js'
      ]
    }
  , module:
    { loaders:
      [ { test: /\.js/
        , exclude: /node_modules/
        , loaders:
          [ 'babel'
          ]
        }
      ]
    }
  , output:
    { path: join(__dirname, 'lib')
    , publicPath: '/'
    , filename: 'bundle.js'
    }
  , target: 'electron'
  }

export default config
