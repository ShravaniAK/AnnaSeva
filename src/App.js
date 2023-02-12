// import logo from './logo.svg';
import './App.css';
import Donate from './components/Donate';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sites from './components/Sites';


function App() {

  // const { pathname, hash, key } = useLocation();
  return (
    <>



    <Router>

      
      <Routes>
         <Route exact path="/" element={<Home/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Donate' element={<Donate/>}/>
        <Route path='/Sites' element={<Sites/>}/>

        
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
