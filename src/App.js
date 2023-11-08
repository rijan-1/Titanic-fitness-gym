import { HomePage} from './pages/Homepage'

import './App.css';

import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

import {LoginPage} from './pages/Login'

import {NavbarPage} from './Navbar'

function App() {
  return (
    <div className="App">
    
      
  <Router>
      <div>
        <NavbarPage/>
      
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path='/pages/Login' element={<LoginPage/>}/>
          
   
    
         
        
        </Routes>
  
      </div>
    </Router>
    </div>
  );
}

export default App;