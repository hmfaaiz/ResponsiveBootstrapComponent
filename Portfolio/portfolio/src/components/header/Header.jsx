import React from 'react';
import "./style.css";
import coverimg from "./coverimg.svg"
const Header = () => {
  return (
    <div className='header container-fluid d-lg-flex flex-lg-row flex-column  px-0'>
      <div className="left">
        <h4>Hi, I'm </h4>
        <h1>Hafiz Muhammad <span className='name'>Faaiz</span> Azeem</h1>
        <p>I am a Software Engineer experties in Nodejs</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, totam accusamus.
           Maxime, alias voluptatum ratione in tenetur iste reprehenderit nostrum!
            Quas fugit suscipit labore facilis illum consequatur non repellat iste.</p>
      </div>
      <div className="right">
     
        <img src={coverimg} alt="" />
      </div>
    </div>
  );
}

export default Header;
