import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";

import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User/Dashboard";
import PrivateRoute from "./components/Layout/Routes/Private";
import ForgetPw from "./pages/Auth/ForgetPw.js";
import AdminRoute from "./components/Layout/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCat from "./pages/Admin/CreateCat.js";
import CreateProd from "./pages/Admin/CreateProd.js";
import CreateUser from "./pages/Admin/CreateUser.js";
import Profile from "./pages/User/Profile.js";
import Products from "./pages/Admin/Products.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "./pages/Search.js";
import ProductDetails from "./pages/ProductDetails.js";
import "./App.css";
import Categories from "./pages/Categories.js";
import CategoryProduct from "./pages/CategoryProduct.js";
import CartPage from "./pages/CartPage.js";
import Orders from "./pages/User/Order.js";
import AdminOrders from "./pages/Admin/AdminOrders.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCat />} />
          <Route path="admin/create-products" element={<CreateProd />} />
          <Route path="admin/create-users" element={<CreateUser />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgetpassword" element={<ForgetPw />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
