import axios from 'axios';

const api = axios.create({
    baseURL: 'https://balblabla'
})




export async function getName(id) {
    const { data } = await api.get(`/v/${id}`);
    return data;
  }
  
  export async function getAll(){
    const { data } = await api.get('/v/users');
    return { data }
  }

  export async function postName(name){
    const { data } = await api.post('/v/users', name);

    return data;
  }

  export async function deleteName(){
    return await api.delete('/v/users');
  }