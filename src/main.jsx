import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App_components2_react_hook_useRef.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App3 from './App_components2_react_hook_useState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    <App3/>
  </React.StrictMode>,
)
