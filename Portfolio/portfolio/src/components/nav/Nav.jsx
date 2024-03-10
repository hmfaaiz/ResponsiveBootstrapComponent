import React from 'react';
import "./style.css";

const Nav = () => {
  return (
    // <!-- Navbar -->
    <nav className="bg-white text-black navbar navbar-expand-lg">
      <div className="container">
        {/* <!-- Logo  --> */}
       <h1> <a className="text-black navbar-brand fs-4" href="#">Faaiz</a></h1>

        {/* <!-- Toggle --> */}
        <button className="navbar-toggler shadow-none border-0 navbar-light" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Sidebar --> */}
        <div className="sidebar  offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-light border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Faaiz</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className=" offcanvas-body d-flex flex-column flex-lg-row p-3 p-lg-0">
            <ul className=" navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link active text-black" aria-current="page" href="#" >Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-black" href="#" >Projects</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-black" href="#" >Skills</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-black" href="#" >Education</a>
              </li>
             
            </ul>
            <div className="d-flex flex-lg-row flex-column gap-1 justify-content-center align-items-center">
              <a href="#" className="text-white text-decoration-none rounded-2 px-4 py-2" style={{ backgroundColor: '#5E338B' }}>Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
