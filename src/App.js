import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componants/Navbar';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, BrowserRouter, Routes,} from "react-router-dom";
import Aboutus from './componants/Aboutus';
import Contactus from './componants/Contactus';

function App() {
  return (
    <>
     <Navbar/>
     <BrowserRouter>
     <Routes>
     <Route path='/Aboutus' element={<Aboutus />}></Route>
     <Route path='/Contactus' element={<Contactus />}></Route>
     </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
