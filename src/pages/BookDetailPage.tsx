import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBookById } from '../BookService';

function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getBookById(id).then(setBook);
    }
  }, [id]);

  if (!book) {
    return <p style={{ color: 'black', textAlign: 'center' }}>Lädt...</p>;
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <Link to="/books" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Zurück zur Liste
      </Link>

      <h1 style={{ color: 'black', marginTop: '20px' }}>Book Detail</h1>

      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '12px',
          padding: '20px',
          backgroundColor: '#f8f8f8',
          marginTop: '20px',
        }}
      >
        <p style={{ color: 'black' }}><strong>ID:</strong> {book.id}</p>
        <p style={{ color: 'black' }}><strong>Titel:</strong> {book.title}</p>
        <p style={{ color: 'black' }}><strong>Publication Date:</strong> {book.publication_date}</p>

        {book.description && (
          <p style={{ color: 'black' }}>
            <strong>Description:</strong> {book.description}
          </p>
        )}

        {book.cover_url ? (
          <div style={{ marginTop: '20px' }}>
            <img
              src={book.cover_url}
              alt={book.title}
              style={{ maxWidth: '250px', borderRadius: '10px' }}
            />
          </div>
        ) : (
          <p style={{ color: 'black', marginTop: '20px' }}>Kein Bild verfügbar</p>
        )}
      </div>
    </div>
  );
}

export default BookDetailPage;