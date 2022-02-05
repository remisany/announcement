import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.scss'

//import components
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Header />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)