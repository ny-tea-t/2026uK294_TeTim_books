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
    <div>
      <h1>Delete Book</h1>

      {books.map((book) => (
        <div key={book.id}>
          <p>ID: {book.id}</p>
          <h3>{book.title}</h3>
          <p>{book.publication_date}</p>
          <button onClick={() => handleDelete(String(book.id))}>
            Löschen
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDeletePage;