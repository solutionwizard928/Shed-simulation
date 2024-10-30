import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import {App} from './App.jsx'
import './index.css'  

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
)
