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

import {MakesUsDiff} from './MakesUsDiff.js'

import {TimeTable} from './TimeTable.js'

import {Faq} from './Pages/FAQ.js';

import { Facilities } from './Pages/Facilities';

import {AboutUs} from './Pages/AboutUs'




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
          <Route path='/Options/Workoutplan' element={<Workoutplan/>}/>
          <Route path='/MakesUsDiff' element={<MakesUsDiff/>}/>
          <Route path='/TimeTable' element={<TimeTable/>}/>
          <Route path='/Pages/FAQ' element={<Faq/>}/>
          <Route path='/Pages/Facilities' element={<Facilities/>}/>
          <Route path='/Pages/AboutUs' element={<AboutUs/>}/>
        
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;