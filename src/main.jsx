import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import DateSheet from './components/DateSheet.jsx'
import Hero from './components/Hero.jsx'
const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='' element={<Hero />} />
    <Route path='datesheet' element={<DateSheet/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={Router} />
 </StrictMode>,
)
