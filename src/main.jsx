import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; // Make sure this import is here
import { AuthProvider } from './context/AuthContext'; // 👈 Add this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 This BrowserRouter MUST wrap App 👇 */}
    <BrowserRouter>
      <AuthProvider> {/* 👈 Wrap App */}
        <App />
      </AuthProvider>
    </BrowserRouter>
    {/* 👆 This BrowserRouter MUST wrap App 👆 */}
  </React.StrictMode>,
)