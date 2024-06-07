import { Formik, Form, Field } from 'formik';
import { useLoginUserMutation } from '../../redux/authApi';
import { Navigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

export const LoginForm = () => {
  const [login, { isSuccess }] = useLoginUserMutation();

  const handleSubmit = async (values, actions) => {
    try {
      const {
        data: { token },
      } = await login({
        email: values.login.trim().toLowerCase(),
        password: values.password,
      }).unwrap();

      actions.resetForm();
      console.log(token);

      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isSuccess && <Navigate to="/contacts" />}
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
    </>
  );
};
