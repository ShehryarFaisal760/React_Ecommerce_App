import React from 'react'
import './App.css'
import Products from './Component/Products.jsx'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import ProductDetails from './Component/ProductDetails.jsx'

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='user/:id' element={<ProductDetails/>}/>
      </Routes> 
      </BrowserRouter>
    
    </>
  )
}

export default App
