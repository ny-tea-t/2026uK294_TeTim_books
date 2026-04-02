import { createBook } from '../BookService';
import PageTitle from '../components/atoms/PageTitle';
import BookForm from '../components/molecules/BookForm';

function BookCreatePage() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <PageTitle>Create Book</PageTitle>

      <BookForm
        initialValues={{ title: '', publication_date: '' }}
        submitText="Erstellen"
        onSubmit={async (values) => {
          await createBook(values);
          alert('Buch erstellt!');
        }}
      />
    </div>
  );
}

export default BookCreatePage;