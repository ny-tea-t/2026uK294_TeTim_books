import { useState } from 'react';
import { createBook } from '../BookService';

function BookCreatePage() {
  const [title, setTitle] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const handleSave = async () => {
    const newBook = {
      title: title,
      publication_date: publicationDate,
    };

    await createBook(newBook);
    alert('Buch erstellt!');
    setTitle('');
    setPublicationDate('');
  };

  return (
    <div>
      <h1>Create Book</h1>

      <div>
        <label htmlFor="title">Titel</label>
        <br />
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label htmlFor="publication_date">Publication Date</label>
        <br />
        <input
          id="publication_date"
          name="publication_date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleSave}>Speichern</button>
    </div>
  );
}

export default BookCreatePage;