import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import NewIn from './components/NewIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="body-1">
        <Slider/>
      </div>
      <div className="body-2">
        <NewIn/>
      </div>
    </div>
  );
}

export default App;
