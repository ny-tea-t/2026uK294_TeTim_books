import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../BookService';
import PageTitle from '../components/atoms/PageTitle';
import BookForm from '../components/molecules/BookForm';

function BookEditPage() {
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
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <PageTitle>Edit Book</PageTitle>

      <div style={{ marginBottom: '12px', color: 'black' }}>
        <strong>ID:</strong> {book.id}
      </div>

      <BookForm
        initialValues={{
          title: book.title || '',
          publication_date: book.publication_date || '',
        }}
        submitText="Speichern"
        onSubmit={async (values) => {
          await updateBook(String(book.id), {
            ...book,
            title: values.title,
            publication_date: values.publication_date,
          });
          alert('Gespeichert!');
        }}
      />
    </div>
  );
}

export default BookEditPage;