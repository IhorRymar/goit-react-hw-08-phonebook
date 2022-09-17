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
    <div className={css.navbarUserContainer}>
      <span>{name}</span>
      <span>|</span>
      <Button variant="primary" onClick={onLogout} type="button">
        Logout
      </Button>
    </div>
  );
};

export default NavbarUser;
