import { useState } from 'react';
import { login } from '../service/AuthService';

type LoginPageProps = {
  onLoginSuccess: () => void;
};

function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      await login(email, password);
      onLoginSuccess();
    } catch (error) {
      console.error(error);
      setErrorMessage('Login fehlgeschlagen');
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default LoginPage;