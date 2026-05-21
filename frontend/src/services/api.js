import axios from 'axios';

// 👇 CAMBIA ESTO por la URL de RENDER
const API_URL = 'https://metodos-numericos-app.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

export const metodosAPI = {
  getMetodos: () => api.get('/metodos'),
  getTiposInterpolacion: () => api.get('/tipos_interpolacion'),
  
  biseccion: (data) => api.post('/biseccion', data),
  newton: (data) => api.post('/newton', data),
  simpson: (data) => api.post('/simpson', data),
  trapecio: (data) => api.post('/trapecio', data),
  interpolacion: (data) => api.post('/interpolacion', data),
  jacobi: (data) => api.post('/jacobi', data),
  gaussSeidel: (data) => api.post('/gauss_seidel', data),
};