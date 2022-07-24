
import './App.css';
import Navbar from './Components/Navbar';
import {

  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

import ScrollToTop from './scrollToTop';
import ProcessPage from './Pages/ProcessPage';
import Orders from './Pages/Orders';
function App() {
  return (
    <div className="App">
     <ScrollToTop>

     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/main' element={<ProcessPage/>}/>
        <Route path='/orders' element={<Orders/>}/>
     </Routes>
     </ScrollToTop>
    </div>
  );
}

export default App;
