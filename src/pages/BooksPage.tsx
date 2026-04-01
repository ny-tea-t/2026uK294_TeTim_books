import { useEffect, useState } from 'react';
import { getBooks } from '../BookService';

function BooksPage() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div>
      <h1>Books</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.publication_date}</p>
        </div>
      ))}
    </div>
  );
}

export default BooksPage;