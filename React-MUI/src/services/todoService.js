import axios from "axios";

const baseUrl = 'https://dummyjson.com/todos';

export default {
  async getAll() {
    const result = await axios.get(baseUrl);
    // const response = await fetch('https://dummyjson.com/todos');
    // const result = await response.json();
    return result.data.todos;
  },
  async getOne(id) {
    const result = await axios.get(`${baseUrl}/${id}`);
    return result.data;
  },
  async update({ id, ...data }) {
    const result = await axios.put(`${baseUrl}/${id}`, data)
    return result;
  },
}

