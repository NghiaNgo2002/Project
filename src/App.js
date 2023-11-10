import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Register from './components/Register';
import LogIn from './components/LogIn';
import './App.css';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />}  />
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/error" element= {<ErrorPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
