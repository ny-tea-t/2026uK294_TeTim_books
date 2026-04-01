import { useEffect, useState } from 'react';
import { getBookById, updateBook } from '../BookService';

function BookEditPage() {
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    getBookById('1').then(setBook);
  }, []);

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
    return <p>Lädt...</p>;
  }

  return (
    <div>
      <h1>Edit Book</h1>

      <div>
        <label>ID</label>
        <p>{book.id}</p>
      </div>

      <div>
        <label htmlFor="title">Titel</label>
        <br />
        <input
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label htmlFor="publication_date">Publication Date</label>
        <br />
        <input
          id="publication_date"
          name="publication_date"
          value={book.publication_date}
          onChange={handleChange}
        />
      </div>

      <br />

      <button onClick={handleSave}>Speichern</button>
    </div>
  );
}

export default BookEditPage;