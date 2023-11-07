import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import NewIn from './components/NewIn';
import Stack from 'react-bootstrap/Stack';
import Footer from './components/Footer';
import Banners from './components/Banners';
import Features from './components/Features';


function App() {
  return (
    <Stack gap={6} className ="stack">
      <div className="p-2 header"><Header /></div>
      <div className="p-2 slider"><Slider /></div>
      <div className="p-2 newin"><NewIn /></div>
      <div className="p-2 banners"><Banners /></div>
      <div className="p-2 features"><Features /></div>
      <footer ><Footer /></footer>
      
    </Stack>
  );
}

export default App;
