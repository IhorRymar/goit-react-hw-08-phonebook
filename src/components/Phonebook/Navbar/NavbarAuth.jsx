import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import css from '../Navbar/NavbarStyles.module.css';

const NavbarAuth = () => {
  return (
    <Navbar.Collapse
      id="responsive-navbar-nav"
      className={css.navbarAuthContainer}
    >
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/register" className={css.navbarLinkReg}>
          Registration
        </Nav.Link>
        <Nav.Link as={NavLink} to="/login" className={css.navbarLinkLog}>
          Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavbarAuth;
