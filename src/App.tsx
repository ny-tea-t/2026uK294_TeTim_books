import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import { isAuthenticated, logout } from './service/AuthService';

function App() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <BooksPage />
    </div>
  );
}

export default App;