import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import BookEditPage from './pages/BookEditPage';
import BookCreatePage from './pages/BookCreatePage';
import BookDeletePage from './pages/BookDeletePage';
import { isAuthenticated } from './service/AuthService';
import Header from './components/organisms/Header';

function App() {
  const loggedIn = isAuthenticated();

  if (!loggedIn) {
    return <LoginPage onLoginSuccess={() => window.location.reload()} />;
  }

  return (
    <div>
      <Header />
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