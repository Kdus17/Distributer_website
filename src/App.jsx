import './index.css'
import Home from './pages/Home'
import About from './pages/Aboutus'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact  from './pages/Contact'
import Products from './pages/Products'
import Notfound from './pages/Notfound'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

function App() {
const router = createBrowserRouter([{path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path:'/contact', element:  <Contact/> },
  {path: '/products', element: <Products/>},
  {path:"*", element: <Notfound/>}
])

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
