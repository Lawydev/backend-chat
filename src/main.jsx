import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'
 import "bootstrap/dist/css/bootstrap.min.css"
import { Apps } from './chatroom/Apps'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Apps/>
     
  </StrictMode>,
)
