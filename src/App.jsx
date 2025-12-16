import './App.css'
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/HomePage/Navbar'
import About from './components/AboutPage/About';
import Services from './components/ServicesPage/Services';
import Contact from './components/ContactPage/Contact';
import Projects from './components/ProjectsPage/Projects'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    { path: '/',
      element: <Navbar />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
