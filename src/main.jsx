import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/AuthContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
    <App />
    </AuthContext>
  </StrictMode>,
)
