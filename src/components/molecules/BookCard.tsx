import { Link } from 'react-router-dom';

type BookCardProps = {
  book: any;
};

function BookCard({ book }: BookCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <p style={{ color: 'black', margin: '0 0 8px 0' }}>ID: {book.id}</p>

      <Link
        to={`/books/${book.id}`}
        style={{
          color: 'black',
          textDecoration: 'none',
          fontSize: '28px',
          fontWeight: 'bold',
        }}
      >
        {book.title}
      </Link>

      <p style={{ color: 'black', marginTop: '12px' }}>{book.publication_date}</p>

      <div style={{ marginTop: '10px' }}>
        <Link
          to={`/edit/${book.id}`}
          style={{
            color: 'black',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default BookCard;