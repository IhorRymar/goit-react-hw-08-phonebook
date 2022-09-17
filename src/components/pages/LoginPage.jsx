import { useSelector, useDispatch } from 'react-redux';

import LoginForm from 'components/Phonebook/AuthForms/LoginForm';

import { login } from 'components/redux/auth/auth-operations';

import { getAuthError } from 'components/redux/auth/auth-selectors';

import css from '../pages/PagesStyles.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={css.loginContainer}>
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
