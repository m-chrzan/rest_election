import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ElectionsApp } from './components/ElectionsApp'
import { mainReducer } from './reducers/main.js'
import './css/eric-meyer-reset.css'
import './css/style.css'

let store = createStore(mainReducer)

let App = () => {
  return (
    <Provider store={store}>
      <ElectionsApp></ElectionsApp>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('container'))
