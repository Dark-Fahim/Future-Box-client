import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import ReactLenis from 'lenis/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root
      options={{ lerp: 0.1, duration: 1.2, orientation: 'vertical', gestureOrientation: 'vertical', smoothWheel: true, wheelMultiplier: 1, smoothTouch: false, touchMultiplier: 2 }}
    >
      <AuthProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </AuthProvider>
    </ReactLenis>
  </StrictMode>
)
