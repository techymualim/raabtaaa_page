import "../styles.css";
import {ReactComponent as Rb_logo} from '../rb_logo.svg';

import React, { useState, useEffect } from 'react';



function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default function Header({ homeActive, setHomeActive }) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

 




  return (
    <div className="header" >
        <div className="logo">
        <Rb_logo/>
        </div>
        
      <div className="btn" style={{ visibility: visible ? 'visible' : 'hidden'}} >
       
        <div
          onClick={() => setHomeActive((prevState) => !prevState)}
          className={`home ${homeActive && "active"}`}
        >
          <p>Business</p>
        </div>
        <div
          onClick={() => setHomeActive((prevState) => !prevState)}
          className={`differ ${!homeActive && "active"}`}
        >
          <p>Worker</p>
        </div>
      </div>
    </div>
  );
}
