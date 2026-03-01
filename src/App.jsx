import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import men_banner from './assets/banner.jpg';
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory category='men' banner={men_banner}/>}/>
        <Route path="/women" element={<ShopCategory category='women' banner={women_banner}/>}/>
        <Route path="/kids" element={<ShopCategory category='kid' banner={kids_banner}/>}/>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}