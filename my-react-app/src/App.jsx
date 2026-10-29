import Login from './Login.jsx';
import Home from './home.jsx';
import Register from './Register.jsx';
import Shoes from './shoes.jsx'
import Electronics from './electronics.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home/>}/>        
        <Route path="/" element={<Register/>} />
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;