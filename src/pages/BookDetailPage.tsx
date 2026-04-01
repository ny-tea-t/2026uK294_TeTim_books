import { useEffect, useState } from 'react';
import { getBookById } from '../BookService';

function BookDetailPage() {
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    getBookById('1').then(setBook);
  }, []);

  if (!book) {
    return <p>Lädt...</p>;
  }

  return (
    <div>
      <h1>Book Detail</h1>
      <p>ID: {book.id}</p>
      <h2>{book.title}</h2>
      <p>{book.publication_date}</p>
    </div>
  );
}

export default BookDetailPage;