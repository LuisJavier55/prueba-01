import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FetchWithInput } from './FetchWithInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchWithInput/>
  </StrictMode>,
)
