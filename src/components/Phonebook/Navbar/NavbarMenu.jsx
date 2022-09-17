import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import css from '../Navbar/NavbarStyles.module.css';

const NavbarMenu = () => {
  return (
    <Nav>
      <Nav.Link as={NavLink} to="/contacts" className={css.navbarLink}>
        Contacts
      </Nav.Link>
    </Nav>
  );
};

export default NavbarMenu;
