import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import "../Styles/Nav.css";
// import Instructions from "./Instructions";


function Nav() {
  // Creates a click event/ function and sets it to false, and then makes a handler to make change the state of click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [open,setOpen] = useState(false);


  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
    setButton(true)
  }
}

  useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="Nav">
        <div className="Nav_contain">
            <Link to ="/" className="Nav_logo" onClick={closeMobileMenu}>
              <i class="fa-solid fa-signal"></i> Better Thera <i class="fa-solid fa-signal fa-flip-horizontal"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click & window.innerWidth <= 960 ? 'nav-menu2' : "nav-menu"}>
              <li className='nav-item'>
                <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                Results 
                </Link>
              </li>
              <li className='nav-item'>
                <Link to = '/Results' className='nav-links' onClick={closeMobileMenu}>
                Help
                </Link>
              </li>
              <li className='nav-item'>
                <div className='nav-links' onClick={() => setOpen(!open)}>
                Developer
                </div>
                {open && <ul className='dropdown'>
                    <a href='https://www.linkedin.com/in/trishal-pandey-908b7b236/'className='drop_items'>
                      Trishal Pandey
                    </a>
                    <a href='https://www.linkedin.com/in/s-ahmed-naushad-7423arato/'className='drop_items'>
                       Syed Ahmed Naushad 
                    </a>
                    <Link to='https://www.linkedin.com/in/yashrajmathur24/' className='drop_items'>
                      Yash Raj mathur
                    </Link>
                  </ul>}
              </li>
              <li className='nav-item'>
                <Link to = '/Sign_up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
              </li>
            </ul>
              {button && <Button buttonStyle='btn--outline'>
              <Link to = '/Sign_up' className='nav-links1' onClick={closeMobileMenu}>
                Sign Up
              </Link>
              </Button> }

        </div>
    </nav>
    <div className='Rainbow'>
        </div>
    </>
  )
}

export default Nav;
