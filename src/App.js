import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home-User/Home-User";
import Register from "./components/LogIn/Register";
import LogIn from "./components/LogIn/LogIn";
import BlogList from "./components/Blog/Blog";
import Shop from "./components/shop/shop";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Cart from "./components/Product/Cart";
import HomeAdmin from "./components/Home-Admin/Home-Admin";
import ProfileUser from "./components/Profile-User/ProfileUser";
import ProfileUserUpdate from "./components/Profile-User/ProfileUserUpdate";
import Password from "./components/Profile-User/Password";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import UserProfileList from "./components/ProfileManage/ListProfile";
import UserProfileManage from "./components/ProfileManage/ProfileManage";
import ViewProfile from "./components/ProfileManage/ViewProfile";
import About from "./components/Home-User/About";
import Productdetail from "./components/Product/productdetail";
import PrivateRoutes from "./components/utils/PrivateRoute";
import ListProduct from "./components/Product-Admin/ListProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/home" exact />
          <Route element={<HomeAdmin />} path="/home-admin" exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/Shop" element={<Shop />} />
          <Route
            path="/productdetail/:id"
            element={[<Header />, <Productdetail />, <Footer />]}
          />{" "}
          <Route path="/Cart" element={[<Cart />]} exact></Route>
          <Route path="/Blog" element={[<BlogList />]} exact></Route>
          <Route path="/Profile-user" element={<ProfileUser />} exact />
          <Route path="/Profile-Update" element={<ProfileUserUpdate />} exact />
          <Route path="/product-manage" element={<ListProduct />} exact></Route>
          <Route path="/Password" element={<Password />} exact />
          <Route path="/Dashboard" element={<Dashboard />} exact />
          <Route path="/profile-manage" element={<UserProfileManage />} exact />
          <Route path="/profile-list" element={<UserProfileList />} exact />
          <Route path="/view-profile/:id" element={<ViewProfile />} exact />
          <Route path="/about" element={<About />} exact />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
