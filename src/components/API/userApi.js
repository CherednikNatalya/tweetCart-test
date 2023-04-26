
import axios from 'axios';

const BASE_URL = 'https://64314333d4518cfb0e5daa0c.mockapi.io/users';

export async function fetchUsers (page = 1) {
  const {data} = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}