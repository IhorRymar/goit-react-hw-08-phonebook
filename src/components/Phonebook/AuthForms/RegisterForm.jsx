import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useForm from 'components/shared/hooks/useForm';

import { initialState } from 'components/shared/initialStateRegister';

import css from '../AuthForms/FormsStyles.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <Form action="" onSubmit={handleSubmit} className={css.registartionForm}>
      <Form.Group className="mb-3" controlId="formRegName">
        <Form.Label htmlFor="">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegEmail">
        <Form.Label htmlFor="">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegPassword">
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
        Registration
      </Button>
    </Form>
  );
};

export default RegisterForm;
