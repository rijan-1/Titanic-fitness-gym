import { HomePage} from './Homepage'
import './App.css';
/*import { RegisterPage} from './Pages/Register';*/
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import {Membership}from './Membership/Membership';
import {Navbar} from './NavBar';
import {GymLocation} from './Membership/Location';
import {RegisterPage} from './Membership/Register';
import {Payment} from './Pages/Payments';

import {Workoutplan} from './Options/Workoutplan.js'




function App() {
  return (
    <div className="App">
    
      
  <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path='/Membership/Membership' element={<Membership/>}/>
          <Route path='Membership/Location' element={<GymLocation/>}/>
          <Route path='Membership/Register' element={<RegisterPage/>}/>
          <Route path='Pages/Payments' element={<Payment/>}/>
          <Route path='/Options/Workoutplan' elemnt={<Workoutplan/>}/>
          
          
    
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;