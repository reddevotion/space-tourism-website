import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/space-tourism-website/',
    element: <Homepage/>,
    errorElement: <NotFoundPage/>
},
{
  path: '/destination',
  element: <Destination/>,
},
{
  path: '/crew',
  element: <Crew/>,
},
{
  path: '/technology',
  element: <Technology/>,
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
