import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Model from './Comp/Model'
import Nav from './Comp/Nav';
import { Phone } from '@material-ui/icons';
import Set from './Comp/Set';

import Timeout from './Comp/Timeout';
import Stopwatch from './Comp/Stopwatch';
import Form from './Comp/Form';
import Formik from './Comp/Formik';
import Form2 from './Comp/Form2';
import Todo from './Comp/Todo'
import Work from './Comp/Work'
import Drop from  './Comp/Drop'
import Todowork from './Comp/Todowork'
import New from './Comp/New'
import Navbar from './Pages/Navbar'
import Button1 from './Pages/Button';
import Mcq from './Pages/Mcq'
import Cred from './Pages/Cred';
import Newmcq from './Pages/Newmcq';
import Fazy from './Pages/Fazy'
import Search from './Pages/search'
import Dumy from './Pages/Dumy'
import Navbar1 from './Workcss/Navbar';
import Home from './Workcss/Home';

function App() {




  return (



    <div className="App">

      <BrowserRouter>

        {/* <Navbar1/>
        <Home/>
        */}

      
        <Routes>

          <Route path="/model" element={<Model />}></Route>
          <Route path="/set" element={<Set />}></Route>
          <Route path='/time' element={<Timeout />}></Route>
          <Route path='/stopwatch' element={<Stopwatch />}></Route>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/f2" element={<Formik/>}></Route>
          <Route path="/f3" element={<Form2/>}></Route>
          <Route path="/drop" element={<Work/>}></Route>
          <Route path="/drop1" element={<Drop/>}></Route>
          <Route path="/t1" element={<Todowork/>}></Route>
          <Route path="/new" element={<New/>}></Route>
          <Route path="/navabar" element={<Navbar/>}></Route>
          <Route path="/button" element={<Button1/>}></Route>
          <Route path="/mcq" element={<Mcq/>}></Route>
          <Route path="/cred" element={<Cred/>}></Route>
          <Route path="/nmcq" element={<Newmcq/>}></Route>
          <Route path="/fazy" element={<Fazy/>}></Route>
          <Route path="/s1" element={<Search/>}></Route>
          <Route path="/dumy" element={<Dumy/>}></Route>

                      ////////////////
                      

          <Route path="/nav" element={<Navbar1/>}></Route>














    
        </Routes>

      </BrowserRouter>








    </div>



  );
}

export default App;
