import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile';

import './App.css';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <div >
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/register" element={<Register/>} />
      
      
      </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
