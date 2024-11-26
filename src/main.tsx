import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/tailwind.css'
import './fonts/franklin-normal-600.ttf'
import App from './pages/App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DanaArticle from './pages/DanaArticle.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <DanaArticle />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
