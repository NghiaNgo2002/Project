import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import NewIn from './components/NewIn';
import Stack from 'react-bootstrap/Stack';
import Footer from './components/Footer';


function App() {
  return (
    <Stack gap={4} className ="stack">
      <div className="p-2 header"><Header /></div>
      <div className="p-2 slider"><Slider /></div>
      <div className="p-2 newin"><NewIn /></div>
      <footer ><Footer /></footer>
    </Stack>
  );
}

export default App;
