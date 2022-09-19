import { useSelector, useDispatch } from 'react-redux';

import Alert from 'react-bootstrap/Alert';

import RegisterForm from 'components/Phonebook/AuthForms/RegisterForm';

import { signup } from 'components/redux/auth/auth-operations';

import { getAuthError } from 'components/redux/auth/auth-selectors';

import css from '../pages/PagesStyles.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div className={css.registrationContainer}>
      <h2>Registration</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <Alert variant={'success'} className={css.alertMessage}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default RegisterPage;
