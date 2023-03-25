import '../style/App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Wines from './Wines';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Wines" element={<Wines />}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
