import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {useEffect} from 'react'
import Navbar from './components/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>
    }
  ])
  useEffect(() => {
    console.log("Rendered");
  }, [])
  return (
    <div className='bg-white h-[100dvh] flex flex-col text-[1rem] font-sans'>
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
