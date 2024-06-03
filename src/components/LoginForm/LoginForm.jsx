import { Formik, Form, Field } from 'formik';
import { useLoginUserMutation } from '../../redux/authApi';
// import { redirect } from 'react-router-dom';

export const LoginForm = () => {
  const [login] = useLoginUserMutation();

  const handleSubmit = async (values, actions) => {
    const {
      data: { token },
    } = await login({
      email: values.login.trim().toLowerCase(),
      password: values.password,
    });

    actions.resetForm();
    console.log(token);
    localStorage.setItem('token', token);
  };
  return (
    <Formik
      initialValues={{
        login: ' ',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Login
          <Field type="text" name="login" required />
        </label>
        <label>
          {' '}
          Pasword
          <Field
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
