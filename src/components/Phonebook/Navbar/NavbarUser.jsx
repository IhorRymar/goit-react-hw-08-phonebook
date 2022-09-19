import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'components/redux/auth/auth-operations';

import { getUser } from 'components/redux/auth/auth-selectors';

import Button from 'react-bootstrap/Button';

import css from '../Navbar/NavbarStyles.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <Navbar.Collapse
      id="responsive-navbar-nav"
      className={css.navbarMenuContainer}
    >
      <Nav className={css.navbarUserContainer}>
        <Nav.Link as={NavLink} to="/contacts" className={css.navbarLink}>
          Contacts
        </Nav.Link>
      </Nav>
      <Button variant="primary" onClick={onLogout} type="button">
        <span className={css.navbarUserUser}>{name}</span> <span>|</span> Logout
      </Button>
    </Navbar.Collapse>
  );
};

export default NavbarUser;
