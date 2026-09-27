import axios from "axios";

const url = "https://dummyjson.com/users";

export const getUsers = async ()=>{

      const response = await axios.get(url);

      return(response.data.users);
}

export const addUser = async (user: any) => {
  const response = await axios.post(`${url}/add`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data; }

export const editUser = async (id: number, updateuser: { id: any; firstName: any; lastName: any; age: number; }) => {
  const response = await axios.put(`${url}/${id}`,updateuser);
    return response.data;

}