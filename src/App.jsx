import Layout from './components/Layout'
import styles from './App.module.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import ContactPage from './components/Pages/ContactPage'
import ProductsPage from './components/Pages/ProductsPage'
import AccountPage from './components/Pages/AccountPage'
import { useState } from 'react'
import myContext from './components/Contexts'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import CartPage from './components/Pages/CartPage'
import { Provider } from 'react-redux'
import store from './components/store'
import WishListPage from './components/Pages/WishListPage'
import SigninPage from './components/Pages/SigninPage'
import LoginPage from './components/Pages/LoginPage'
import ProtectedRoute from './protectedRouts/protectedRoute'
import ProductDetails from './components/Pages/ProductDetails'
import AddProductPage from './components/Pages/AddProductPage'









function App() {

  const [theme,settheme]=useState("light")
  const [language,setlanguage]=useState("ltr")
  
  let firstQuery= new QueryClient()

  return (
    <Provider store={store}>
    <QueryClientProvider client={firstQuery}>
  <div dir={language}>
  
  <BrowserRouter>
  <myContext.Provider value={{theme,settheme,language,setlanguage}}>
{/*   <Layout > */}
  <Routes> 
    <Route element={ <Layout />}>
  <Route path='/'  element={<HomePage/>}></Route>
  <Route path='/home'  element={<HomePage/>}></Route>
  <Route path='/contact' element={<ProtectedRoute><ContactPage/></ProtectedRoute>}></Route>
  <Route path='/products' element={<ProductsPage/>}></Route>
  <Route path='/account' element={  <AccountPage/> }></Route>
  <Route path='/cart' element={<CartPage/>}></Route>
  <Route path='/wishlist' element={<WishListPage/>}></Route>
  <Route path='/signin' element={<SigninPage/>}></Route>
  <Route path='/login' element={<LoginPage/>}></Route>
  <Route path='/products/:id' element={<ProductDetails/>}></Route>
  <Route path='/addproduct' element={<AddProductPage/>}></Route>
  </Route>
  </Routes>
{/*   </Layout > */}

  
  
  </myContext.Provider>
  </BrowserRouter>
  </div>
  </QueryClientProvider>
  </Provider>
    
  )
}


export default App
