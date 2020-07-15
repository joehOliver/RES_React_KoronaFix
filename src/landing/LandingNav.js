import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@rmwc/icon';
import { IconButton } from '@rmwc/icon-button';
import { Tooltip } from '@rmwc/tooltip';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '@material/icon-button/dist/mdc.icon-button.css';
import '@rmwc/icon/icon.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@rmwc/tooltip/tooltip.css';
import './LandingNav.css';
import Seal from '../images/logo-seal-final.svg';
import Brand from '../images/logo-site-2.png';

const LandingNav = props => {
  const [fill, fillOnScroll] = useState(false);
  const [toggle, isToggled] = useState(false);
  const navRef = useRef(null);
  navRef.current = fill;
  useEffect(() => {
    const handleScroll = () => {
      const isFill = window.scrollY > 30;
      if (navRef.current !== isFill) {
        fillOnScroll(isFill);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () =>  {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Navbar className={fill ? ' nav-fill-scroll shadow ' : ' nav-transparent '} style={{ transition: 'background 0.2s linear' }} fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img className="img-header seal" src={Seal} alt="City of Koronadal Service Portal" width="240"/>
          <img className="img-header brand" src={Brand} alt="City of Koronadal Service Portal" width="112"/>
        </Navbar.Brand>
        <Tooltip content={toggle ? 'Close' : 'Menu'} align="bottom">
          <Navbar.Toggle as="div" aria-controls="nav-collapse-section" style={{border: 'none', padding: '0'}}>
            <IconButton icon={toggle ? 'close' : 'menu'} label={toggle ? 'Close' : 'Menu'} onClick={()=>isToggled(!toggle)} style={{color:'white', backgroundColor:'inherit'}}/>
          </Navbar.Toggle>
        </Tooltip>
        <Navbar.Collapse aria-controls="nav-collapse-section" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#" className="py-4 px-lg-4">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="py-4 px-lg-4">FAQs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="py-4 px-lg-4">Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="login py-4 px-lg-4">
                <Icon icon="login" className="mr-2"/>Login account
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
}

export default LandingNav;
