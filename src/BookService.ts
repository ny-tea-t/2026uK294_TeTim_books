import api from './service/Api';

export async function getBooks() {
  const res = await api.get('/books');
  return res.data;
}

export async function getBookById(id: string) {
  const res = await api.get(`/books/${id}`);
  return res.data;
}