import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav(){
    const [show, handleShow] = useState(false);
  useEffect(() => {
  window.addEventListener("scroll", () =>{
      if (window.scrollY > 100)
      {
      handleShow(true);}
      else
          handleShow(false); 
  });

  return () => {

  }
}, []);
    

//background as you scroll  down
  return (
    <div className = {`nav ${show && "black"}`}>
        <img className='nav_log'src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"alt="logo"></img>
        <img className='nav_avatar'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"alt="logo"></img>

    </div>
  );
}
export default Nav;
