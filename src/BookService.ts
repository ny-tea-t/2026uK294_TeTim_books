import api from "./service/Api";

export async function getBooks() {
  const res = await api.get('/books');
  return res.data;
}