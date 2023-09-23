import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './features/core/store.ts'
import Root from './features/core/routes/root.tsx'
import Home from './features/core/routes/home.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/canvas',
        element: <h1>Canvas</h1>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

