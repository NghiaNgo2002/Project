import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import NewIn from './components/NewIn';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
     <Stack  gap={3}>
      <div className="p-2 header"><Header/></div>
     <div className="p-2 slider"><Slider/></div>
     <div className="p-2 newin"><NewIn/></div>
   </Stack>
  );
}

export default App;
