import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MiRouter from './router/MiRouter'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MiRouter />
    </BrowserRouter>
  </React.StrictMode>,
)