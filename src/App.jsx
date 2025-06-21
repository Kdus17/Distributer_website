import './index.css'
import Home from './pages/Home'
import About from './pages/Aboutus'
import Contact  from './pages/Contact'
import Products from './pages/Products'
import Notfound from './pages/Notfound'
import Login from './pages/Login'


import {createBrowserRouter,  RouterProvider} from 'react-router-dom'
import { LightProvider } from './LightContext'


function App() {
const router = createBrowserRouter([{path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path:'/contact', element:  <Contact/> },
  {path: '/products', element: <Products/>},
  {path:"*", element: <Notfound/>},
  {path:"/login", element: <Login/>}
])

  return (
  <LightProvider>
   <RouterProvider router={router}/>
   </LightProvider>
  )
}

export default App
