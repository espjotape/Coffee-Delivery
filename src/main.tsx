import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App.tsx'
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx'
import { Home } from './pages/Home/Index.tsx'
import { Checkout } from './pages/Checkout/index.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home/>},
      { path: '/checkout', element: <Checkout/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router}/>
    </App>
  </StrictMode>,
)
