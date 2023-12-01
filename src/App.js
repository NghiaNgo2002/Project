import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home-User/Home-User";
import Register from './components/LogIn/Register';
import LogIn from './components/LogIn/LogIn';
import BlogList from './components/Blog/Blog';
import Shop from './components/shop/shop';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Cart from './components/Product/Cart';
import HomeAdmin from './components/Home-Admin/Home-Admin';
import ProfileUser from './components/Profile-User/ProfileUser';
import ProfileUserUpdate from './components/Profile-User/ProfileUserUpdate';
import Password from './components/Profile-User/Password';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import UserProfileList from './components/ProfileManage/ListProfile';
import UserProfileManage from './components/ProfileManage/ProfileManage';
import ViewProfile from './components/ProfileManage/ViewProfile';
import About from './components/Home-User/About';
import Productdetail from './components/Product/productdetail';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<Home />}  />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/detail" element={[<Header />, <Productdetail />, <Footer />]}
          ></Route>
          <Route path="/Cart" element={[ <Cart />]} ></Route>
           <Route path="/home-admin" element={<HomeAdmin />}  />
           <Route path="/Profile-user" element={<ProfileUser />}  />
           <Route path="/Profile-Update" element={<ProfileUserUpdate />}  />
           <Route path="/Password" element ={<Password/>}/>
           <Route path="/Dashboard" element = {<Dashboard/>}/>
           <Route path="/profile-manage" element = {<UserProfileManage/>}/>
           <Route path="/profile-list" element = {<UserProfileList/>}/>
           <Route path="/view-profile/:id" element = {<ViewProfile/>}/>
           <Route path="/about" element = {<About/>}/>
        </Routes>
    </Router>
  );
}

export default App;
