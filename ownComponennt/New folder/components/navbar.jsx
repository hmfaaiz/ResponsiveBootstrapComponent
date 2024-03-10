// import React, { useState, useEffect } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "./stylesheet.css";
// import Banner from "./banner"
// import { navlink } from "react-router-dom"
// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState();

//   const handleItemClick = (index) => {
//     setActiveItem(index);
//     console.log(index, activeItem)
//   };
//   useEffect(() => {
//     console.log("Updated State:", activeItem);
//   }, [activeItem]);

//   return (
//     <>
//       <nav className="navbar mynav">
//       <Banner/>
//         <div className="container justify-content-end">
//           <ul className="nav nav-underline justify-content-end">
//             <li className={`nav-item `}>
//               <navlink
//                 // className=""
//                 className={`${activeItem === 1 ? 'myactive' : 'mylink'}`}
//                 aria-current="page"
//                 to="#"
//                 onClick={() => handleItemClick(1)}
//               >
//                 Home
//               </navlink>
//             </li>
//             <li className={`nav-item`}>
//               <navlink
//                 className={` ${activeItem === 2 ? 'myactive' : 'mylink'}`}
//                 href="#"
//                 onClick={() => handleItemClick(2)}
//               >
//                 Services
//               </navlink>
//             </li>
//             <li className={`nav-item `}>
//               <navlink
//                 className={` ${activeItem === 3 ? 'myactive' : 'mylink'}`}
//                 href="#"
//                 onClick={() => handleItemClick(3)}
//               >
//                 Partners
//               </navlink>
//             </li>
//             <li className={`nav-item `}>
//               <navlink
//                 className={` ${activeItem === 4 ? 'myactive' : 'mylink'}`}
//                 href="#"
//                 onClick={() => handleItemClick(4)}
//               >
//                 Locations
//               </navlink>
//             </li>
//             <li className={`nav-item `}>
//               <navlink
//                 className={` ${activeItem === 5 ? 'myactive' : 'mylink'}`}
//                 href="#"
//                 onClick={() => handleItemClick(5)}
//               >
//                 About
//               </navlink>
//             </li>
//             <li className={`nav-item `}>
//               <navlink
//                 className={` ${activeItem === 6 ? 'myactive' : 'mylink'}`}
//                 href="#"
//                 onClick={() => handleItemClick(6)}
//               >
//                 Contact
//               </navlink>
//             </li>

//           </ul>

//           <button class="button-34" role="button">Login</button>


//           <button class="button-34" role="button">Register</button>


//         </div>
     
//       </nav>
//     </>
//   );
// }

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css';
import Banner from './banner';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState();
  const [showMenu, setShowMenu] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
    setShowMenu(false);
  };

  useEffect(() => {
    console.log('Updated State:', activeItem);
  }, [activeItem]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar mynav">
        {/* < Banner /> */}
        <div className="container justify-content-end">

        <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
  

          <ul className={`nav nav-underline justify-content-end ${showMenu ? 'show-menu' : ''}`}>
            <li className={`nav-item `}>
              <NavLink
                className={`${activeItem === 1 ? 'myactive' : 'mylink'}`}
                aria-current="page"
                to="#"
                onClick={() => handleItemClick(1)}
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item`}>
              <NavLink
                className={` ${activeItem === 2 ? 'myactive' : 'mylink'}`}
                to="#"
                onClick={() => handleItemClick(2)}
              >
                Services
              </NavLink>
            </li>
            <li className={`nav-item `}>
              <NavLink
                className={` ${activeItem === 3 ? 'myactive' : 'mylink'}`}
                to="#"
                onClick={() => handleItemClick(3)}
              >
                Partners
              </NavLink>
            </li>
            <li className={`nav-item `}>
              <NavLink
                className={` ${activeItem === 4 ? 'myactive' : 'mylink'}`}
                to="#"
                onClick={() => handleItemClick(4)}
              >
                Locations
              </NavLink>
            </li>
            <li className={`nav-item `}>
              <NavLink
                className={` ${activeItem === 5 ? 'myactive' : 'mylink'}`}
                to="#"
                onClick={() => handleItemClick(5)}
              >
                About
              </NavLink>
            </li>
            <li className={`nav-item `}>
              <NavLink
                className={` ${activeItem === 6 ? 'myactive' : 'mylink'}`}
                to="#"
                onClick={() => handleItemClick(6)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* <button className="button-34" role="button">
            Login
          </button>

          <button className="button-34" role="button">
            Register
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

