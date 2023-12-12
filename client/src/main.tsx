import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Root from './features/core/pages/root.tsx'
import Home from './features/core/pages/home.tsx'
import Canvas from './features/template/pages/preview.tsx'
import TemplateCanvas from './features/template/pages/canvas.tsx'
import TemplateRootPage from './features/template/pages/index.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/template',
        element: <TemplateRootPage />,
        children: [
          {
            path: ':templateId/preview',
            element: <Canvas />
          },
          {
            path: ':templateId/canvas',
            element: <TemplateCanvas />
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
        <RouterProvider router={router} />
//   </React.StrictMode>,
)

