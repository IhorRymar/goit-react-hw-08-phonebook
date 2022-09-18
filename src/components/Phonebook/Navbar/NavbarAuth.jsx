import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import css from '../Navbar/NavbarStyles.module.css';

const NavbarAuth = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/register" className={css.navbarLinkReg}>
        Registration
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login" className={css.navbarLinkLog}>
        Login
      </Nav.Link>
    </Nav>
  );
};

export default NavbarAuth;
