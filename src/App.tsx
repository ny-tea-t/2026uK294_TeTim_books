import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import BookEditPage from './pages/BookEditPage';
import BookCreatePage from './pages/BookCreatePage';
import BookDeletePage from './pages/BookDeletePage';
import { isAuthenticated, logout } from './service/AuthService';

function App() {
  const loggedIn = isAuthenticated();

  if (!loggedIn) {
    return <LoginPage onLoginSuccess={() => window.location.reload()} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => {
          logout();
          window.location.reload();
        }}
        style={{ color: 'black', marginBottom: '20px' }}
      >
        Logout
      </button>

      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/edit/:id" element={<BookEditPage />} />
        <Route path="/create" element={<BookCreatePage />} />
        <Route path="/delete" element={<BookDeletePage />} />
      </Routes>
    </div>
  );
}

export default App;