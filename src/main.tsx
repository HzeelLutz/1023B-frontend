import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Container  from './container.tsx'
import "./main.css"
import Header from './Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Container nome="Header"/>
  </StrictMode>,
)
