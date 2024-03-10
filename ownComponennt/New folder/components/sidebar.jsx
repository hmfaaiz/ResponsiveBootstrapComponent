import React from 'react';
import './stylesheet.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Sidebar() {
  const customDropdownStyle = {
    width: '15vw',
    backgroundColor: 'rgb(0, 0, 0)',
    height: '100vh',
    color: 'rgb(244, 244, 244)',
    marginTop: '-729px',
  
    
  };
  const customDropdownItem = {
   
    color: 'rgb(255, 255, 255)',
    
  };


  return (
    <>
   
        <Dropdown.Menu show style={customDropdownStyle} align="end">
            <div>

            
          <Dropdown.Item eventKey="1" style={customDropdownItem}>
            Action
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" style={customDropdownItem} >
            Another action
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" style={customDropdownItem} >
            Something else here
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4" style={customDropdownItem}>
            Separated link
          </Dropdown.Item>
          </div>
        </Dropdown.Menu>
     
    </>
  );
}

export default Sidebar;
