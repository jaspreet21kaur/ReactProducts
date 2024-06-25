import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AddProducts from './pages/AddProducts'
import List from './pages/List'
import Navbar from './pages/Navbar'
import View from './pages/View'
import Cart from './pages/Cart'
import Edit from './pages/Edit'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
 
    <Routes>
    
     <Route path='/' element={<AddProducts/>}/>
     <Route path='/list' element={<List/>}/>
     <Route path='/view/:name' element={<View/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/edit/:name' element={<Edit/>}/>
 
    </Routes>
    </BrowserRouter>
  )
}

export default App