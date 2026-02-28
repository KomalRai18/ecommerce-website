import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
export default function App() {
  return(
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory cateory='men'/>}/>
        <Route path="/women" element={<ShopCategory cateory='women'/>}/>
        <Route path="/kids" element={<ShopCategory cateory='kids'/>}/>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product" element={<Product/>} />
        <Route path=":productId" element={<Product/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}