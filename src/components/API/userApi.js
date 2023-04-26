
import axios from 'axios';

const BASE_URL = 'https://64424fbf33997d3ef90cf4f2.mockapi.io/users';

export async function fetchUsers (page = 1) {
  const {data} = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}

