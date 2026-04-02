import BookCard from '../molecules/BookCard';

type BooksListProps = {
  books: any[];
};

function BooksList({ books }: BooksListProps) {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksList;