import { useEffect, useState } from 'react';
import { deleteBook, getBooks } from '../BookService';

function BookDeletePage() {
  const [books, setBooks] = useState<any[]>([]);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    alert('Buch gelöscht!');
    loadBooks();
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>Delete Book</h1>

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
          <p style={{ color: 'black' }}>ID: {book.id}</p>
          <h3 style={{ color: 'black' }}>{book.title}</h3>
          <p style={{ color: 'black' }}>{book.publication_date}</p>
          <button onClick={() => handleDelete(String(book.id))} style={{ color: 'black' }}>
            Löschen
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookDeletePage;