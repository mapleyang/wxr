import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, browserHistory, Router, Route } from 'react-router'
import App from "./containers/app"
import Home from "./containers/home/index"
import 'antd/dist/antd.less'
const initialState = window.___INITIAL_STATE__

const MOUNT_NODE = document.getElementById('root')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/home" component={Home}>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
)

// if (__DEV__) {
//   if (window.devToolsExtension) {
//     window.devToolsExtension.open()
//   }
// }

// if (__DEV__) {
//   if (module.hot) {
//     const renderApp = render
//     const renderError = (error) => {
//       const RedBox = require('redbox-react').default
//       ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
//     }
//     render = () => {
//       try {
//         renderApp()
//       } catch (error) {
//         console.error(error)
//         renderError(error)
//       }
//     }
//     module.hot.accept('./containers/index', () =>
//       setImmediate(() => {
//         ReactDOM.unmountComponentAtNode(MOUNT_NODE)
//         render()
//       })
//     )
//   }
// }

// render()
