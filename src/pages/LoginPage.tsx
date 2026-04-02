import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../service/AuthService';
import PageTitle from '../components/atoms/PageTitle';
import AppButton from '../components/atoms/AppButton';

type LoginPageProps = {
  onLoginSuccess: () => void;
};

function LoginPage({ onLoginSuccess }: LoginPageProps) {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '40px' }}>
      <PageTitle>Login</PageTitle>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) errors.email = 'Email ist erforderlich';
          if (!values.password) errors.password = 'Passwort ist erforderlich';
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setStatus('');
          try {
            await login(values.email, values.password);
            onLoginSuccess();
          } catch (error) {
            console.error(error);
            setStatus('Login fehlgeschlagen');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ status }) => (
          <Form>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="email" style={{ color: 'black' }}>Email</label>
              <br />
              <Field id="email" name="email" type="email" style={{ width: '100%', padding: '10px', color: 'black' }} />
              <div style={{ color: 'red', marginTop: '4px' }}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="password" style={{ color: 'black' }}>Passwort</label>
              <br />
              <Field id="password" name="password" type="password" style={{ width: '100%', padding: '10px', color: 'black' }} />
              <div style={{ color: 'red', marginTop: '4px' }}>
                <ErrorMessage name="password" />
              </div>
            </div>

            <AppButton type="submit">Login</AppButton>

            {status && <p style={{ color: 'red' }}>{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;