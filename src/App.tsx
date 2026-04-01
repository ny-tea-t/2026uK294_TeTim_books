import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import BookEditPage from './pages/BookEditPage';
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
      <BookEditPage />
    </div>
  );
}

export default App;