import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../BookService';

function BookEditPage() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getBookById(id).then(setBook);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await updateBook(book.id, book);
    alert('Gespeichert!');
  };

  if (!book) {
    return <p style={{ color: 'black', textAlign: 'center' }}>Lädt...</p>;
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>Edit Book</h1>

      <div style={{ marginBottom: '12px', color: 'black' }}>
        <strong>ID:</strong> {book.id}
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="title" style={{ color: 'black' }}>Titel</label>
        <br />
        <input
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', color: 'black' }}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="publication_date" style={{ color: 'black' }}>Publication Date</label>
        <br />
        <input
          id="publication_date"
          name="publication_date"
          value={book.publication_date}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', color: 'black' }}
        />
      </div>

      <button onClick={handleSave} style={{ padding: '10px 16px', color: 'black' }}>
        Speichern
      </button>
    </div>
  );
}

export default BookEditPage;