import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Register from './components/LogIn/Register';
import LogIn from './components/LogIn/LogIn';
import BlogList from './components/Blog/Blog';
import Shop from './components/Shop/shop';
import Header from './components/Header';
import Productdetail from './components/Product/productdetail';
import Footer from './components/Footer';
import Cart from './components/Product/Cart';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<Home />}  />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/Shop" element={<Shop/>}/>
          <Route
            path="/detail"
            element={[<Header />, <Productdetail />, <Footer />]}
          ></Route>
          <Route
            path="/Cart"
            element={[<Header />, <Cart />, <Footer />]}
          ></Route>
        </Routes>
    </Router>
  );
}

export default App;
