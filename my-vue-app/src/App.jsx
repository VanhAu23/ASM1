import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/homepage'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/Detail'
import Dashboard from './pages/Admin/Dashboard'
import ProductPage from './pages/Admin/Product'
import AddProductPage from './pages/Admin/AddProduct'
import UpdateProductPage from './pages/Admin/UpdateProduct'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  // console.log(products);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductPage />} />
        <Route path='/admin/product/add' element={<AddProductPage />} />
        <Route path='/admin/product/:id/update' element={<UpdateProductPage />} />
      </Routes>

    </>
  )
}

export default App