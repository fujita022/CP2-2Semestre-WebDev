import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Sobremim from './pages/SobreMim/Sobremim.jsx';
import Contato from './pages/Contato/Contato.jsx';
import Projetos from './pages/Projetos/Projetos.jsx'
import Sociais from './pages/Sociais/Sociais.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path:'/sobremim', element: <Sobremim/>},
      {path:'/contato', element: <Contato/>},
      {path:'/projetos', element: <Projetos/>},
      {path:'/sociais', element: <Sociais/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
