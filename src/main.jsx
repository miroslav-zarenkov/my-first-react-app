import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import CuteCat from './CuteCat'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <CuteCat />
  </React.StrictMode>,
)
