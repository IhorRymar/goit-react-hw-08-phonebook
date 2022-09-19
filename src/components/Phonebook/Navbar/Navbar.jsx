import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';

import useAuth from 'components/shared/hooks/useAuth';

import css from '../Navbar/NavbarStyles.module.css';

const Header = () => {
  const isLogin = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
        className={css.navbar}
      >
        <Container fluid="sm">
          <Navbar.Brand as={NavLink} to="/" className={css.navbarTitle}>
            Phonebook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
