import React, { useState } from 'react'
import './Navbar.css'
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './Home';

const Navbar = () => {

  const [isopen, setisopen] = useState(false)



  return (
    <>
      <div className='container'>

        <div className='main'>

          <div className='menu1'>

            <h3>Home<span style={{ color: "red" }}>Tech.com</span></h3>

          </div>





          <div className='menu2'>
            <button style={{ backgroundColor: 'lightgray', color: 'white' }} onClick={() => setisopen(!isopen)}>

              {isopen ? <MenuIcon /> : <MenuIcon />}


            </button>


            <ul className={isopen ? 'open' : ""}>

              <button style={{ marginLeft: "130px", backgroundColor: 'black', color: 'white' }} onClick={() => setisopen(!isopen)}><CloseIcon /></button>


              <li> <a>Home</a></li>
              <li ><a>About</a></li>
              <li ><a>Service</a></li>
              <li ><a>contects</a></li>

            </ul>


          </div>


        </div>
      </div>





    </>

  )
}

export default Navbar;





// import React from "react";
// import "./Navbar.css";
// import Home from  './Home'

// function Navbar() {
//   return (
//     <>
//     <nav className="navbar">
//       <h1>My Website</h1>
//       <ul className="nav-links">
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//     </>
//   );
// }

// export default Navbar;
