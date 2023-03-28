import React from 'react'
import { useState, useEffect } from 'react';

function Nav() {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1700) {
        handleShow(true)
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [])

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" srcset="" />
        <img className="avatar" src="./netflix-user.png" alt="netflix-avatar" srcset="" />

    </div>
  )
}

export default Nav 