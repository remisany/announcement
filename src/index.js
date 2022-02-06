import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.scss'

//import components
import Main from './components/Main'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Main />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)