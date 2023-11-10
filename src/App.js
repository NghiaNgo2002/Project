import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Register from './components/Register';
import LogIn from './components/LogIn';
import BlogList from './components/Blog';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<Home />}  />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
    </Router>
  );
}

export default App;
