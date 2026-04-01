import api from './Api';

export async function login(email: string, password: string) {
  const res = await api.post('/login', {
    email,
    password,
  });

  const token = res.data.accessToken || res.data.token;

  if (!token) {
    throw new Error('Kein Token erhalten');
  }

  localStorage.setItem('token', token);

  return token;
}

export function logout() {
  localStorage.removeItem('token');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}