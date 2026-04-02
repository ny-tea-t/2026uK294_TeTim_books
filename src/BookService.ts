<<<<<<< HEAD
import api from './service/Api';
=======
import api from "./service/Api";
>>>>>>> feature/login

export async function getBooks() {
  const res = await api.get('/books');
  return res.data;
<<<<<<< HEAD
}

export async function getBookById(id: string) {
  const res = await api.get(`/books/${id}`);
  return res.data;
}

export async function updateBook(id: string, data: any) {
  const res = await api.put(`/books/${id}`, data);
  return res.data;
}

export async function createBook(data: any) {
  const res = await api.post('/books', data);
  return res.data;
}

export async function deleteBook(id: string) {
  const res = await api.delete(`/books/${id}`);
  return res.data;
=======
>>>>>>> feature/login
}