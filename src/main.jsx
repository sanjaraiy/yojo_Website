import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'


//**************1 way to create router*************************/
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout></Layout>,
//     children: [
//       {
//         path:"",
//         element:<Home></Home>,
//       },
//       {
//         path:"about",
//         element:<About></About>,
//       },
//       {
//         path:"contact",
//         element:<Contact></Contact>
//       }
//     ]
//   }
// ])

//**************2 way to create router*************************/
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>} ></Route>
      <Route path='about' element={<About></About>} ></Route>
      <Route path='contact' element={<Contact></Contact>} ></Route>
      <Route path='user/:userid' element={<User></User>} ></Route>
      <Route
      //  loader={()=>{}} //yaha par bhi sidhe api call ki ja sakti hai

      loader={githubInfoLoader}
       path='github' 
       element={<Github></Github>}
        ></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
