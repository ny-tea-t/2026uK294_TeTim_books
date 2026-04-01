import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../BookService';

function BooksPage() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: 'black', textAlign: 'center' }}>Books</h1>

      <div style={{ marginBottom: '20px' }}>
        <Link to="/create" style={{ color: 'black', marginRight: '16px', textDecoration: 'none', fontWeight: 'bold' }}>
          Create Book
        </Link>

        <Link to="/delete" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
          Delete Books
        </Link>
      </div>

      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '16px',
            marginBottom: '16px',
            backgroundColor: '#f8f8f8',
          }}
        >
          <p style={{ color: 'black', margin: '0 0 8px 0' }}>ID: {book.id}</p>

          <Link
            to={`/books/${book.id}`}
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            {book.title}
          </Link>

          <p style={{ color: 'black', marginTop: '12px' }}>{book.publication_date}</p>

          <div style={{ marginTop: '10px' }}>
            <Link
              to={`/edit/${book.id}`}
              style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BooksPage;