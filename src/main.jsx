import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './server.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
  
  /*   <React.StrictMode>
      <App />
    </React.StrictMode>, */