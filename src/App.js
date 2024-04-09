import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserModule from './Components/UserModule/UserModule';
import UserRegister from './Components/UserRegister/UserRegister';
import Home from './Components/Home/Home'
import RoofTopImage from './Components/RoofTopImage/RoofTopImage';
import Result from './Components/Result/Result';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home/>} /> 
          <Route path="/userModule"  element={<UserModule/>} />
          <Route path="/userRegister"  element={<UserRegister/>} />
          <Route path="/roofTopImage"  element={<RoofTopImage/>} />
          <Route path="/result" element={<Result />} />
       </Routes> 
    </Router>

    </div>
  );
}

export default App;
