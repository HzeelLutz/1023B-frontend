import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import Header  from './header.tsx'
import Body from './body.tsx'
import Footer from './footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />,
    <Header />,
    <Body />,
    <Footer />,
  </StrictMode>,
)
