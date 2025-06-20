import './index.css'
import Home from './pages/Home'
import About from './pages/Aboutus'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact  from './pages/Contact'
import Products from './pages/Products'
import Notfound from './pages/Notfound'
import {createBrowserRouter,  RouterProvider} from 'react-router-dom'
import { LightProvider } from './LightContext'

function App() {
const router = createBrowserRouter([{path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path:'/contact', element:  <Contact/> },
  {path: '/products', element: <Products/>},
  {path:"*", element: <Notfound/>}
])

  return (
  <LightProvider>
   <RouterProvider router={router}/>
   </LightProvider>
  )
}

export default App
