import React from 'react'
//This means the server-rendered markup is preserved and only event handlers are attached when React takes over in the browser, allowing the initial load performance to be better.
import { hydrate } from 'react-dom'
import App from './App'

hydrate(<App/>, document.getElementById('root'))
