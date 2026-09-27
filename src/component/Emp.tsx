import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUser, removeUser } from "../redux/userSlice";
import { store } from "../redux/store";

import {
  getUsers,
  deleteUser,
} from "../Service/userService";
import { useNavigate } from "react-router-dom";

const UserList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(
    (state: any) => state.user
  );
  console.log(users);
  
  useEffect(() => {
    if(users.length===0){
      const fetchUsers = async () => {
      const data = await getUsers();
      dispatch(setUser(data));
    };
    fetchUsers();
    }
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    dispatch(removeUser(id))      
  };

  
    const [searchName, setSearchName] = useState("");

       const filter = users.filter((item)=>
         `${item.firstName} ${item.lastName}`
      .toLowerCase()
      .includes(searchName.toLowerCase())
    
      )


  return (
    <div>
      <h2>User List</h2>
      <button onClick={()=>navigate("/adduser")}>Add User</button>
      <br /><br />

      <form >
        <input type="text" placeholder="inputforsearc"   value={searchName}
        onChange={(e)=> setSearchName(e.target.value)}/>
        <br />
        <br /><br />

      </form>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.firstName} {item.lastName}
              </td>
              <td>{item.age}</td>

              <td className="action">
                <button
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button> 
                <button
                  onClick={() => navigate(`/edituser/${item.id}`)}>Edit</button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default UserList;