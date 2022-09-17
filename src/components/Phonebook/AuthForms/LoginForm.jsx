import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useForm from 'components/shared/hooks/useForm';

import { initialState } from 'components/shared/initialStateLogin';

import css from '../AuthForms/FormsStyles.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <Form action="" onSubmit={handleSubmit} className={css.loginForm}>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Label htmlFor="">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Label htmlFor="">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
