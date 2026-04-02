import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../BookService';
import PageTitle from '../components/atoms/PageTitle';
import BooksList from '../components/organisms/BooksList';

function BooksPage() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <PageTitle>Books</PageTitle>

      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/create"
          style={{
            color: 'black',
            marginRight: '16px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Create Book
        </Link>

        <Link
          to="/delete"
          style={{
            color: 'black',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Delete Books
        </Link>
      </div>

      <BooksList books={books} />
    </div>
  );
}

export default BooksPage;