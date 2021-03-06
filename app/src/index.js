import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { setSubjects } from './action-creators/subjects'
import './App.css'

import 'typeface-roboto'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setSubjects)

registerServiceWorker()
