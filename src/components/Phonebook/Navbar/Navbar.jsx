import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import NavbarMenu from './NavbarMenu';
import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';

import useAuth from 'components/shared/hooks/useAuth';

import css from '../Navbar/NavbarStyles.module.css';

const Header = () => {
  const isLogin = useAuth();
  return (
    <div>
      <Navbar bg="light" variant="light" className={css.navbar}>
        <Container>
          <Navbar.Brand href="/" className={css.navbarTitle}>
            Phonebook
          </Navbar.Brand>
          {isLogin && <NavbarMenu />}
          {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
