import { Formik, Form, Field } from 'formik';
import { useRegisterUserMutation } from '../../redux/authApi';

export const RegisterForm = () => {
  const [registerUser] = useRegisterUserMutation();
  // console.log(registerUser);

  const handleSubmit = (values, actions) => {
    console.log(' Click on register button');
    console.log(' values', values);
    console.log(actions);
    registerUser(values);
    actions.resetForm();
   
  };
  return (
    <Formik
      initialValues={{
        name: ' ',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Login
          <Field type="text" name="name" required />
        </label>
        <label>
          email
          <Field type="email" name="email" required />
        </label>
        <label>
          Pasword
          <Field
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>
        <button type="submit">Register now</button>
      </Form>
    </Formik>
  );
};
