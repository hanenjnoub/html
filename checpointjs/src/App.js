import logo from './logo.svg';
import './App.css';
import ProfilePhoto from "./componeent/porfile/ProfilePhoto"
import Admail from"./componeent/porfile/Adresse"
import FullName from"./componeent/porfile/FullName"
const App = () => (
 <>
  <h1>My Profile</h1>
 <div className='test'>

   <ProfilePhoto />
    
      <FullName/>
      </div>
      <Admail/>
    
   
 </>
);
export default App;
//function App() {
  
  //return (
   
   // <div className="App">
      // <ProfilePhoto />
           
   // </div>
  //);
//}

//export default App;
