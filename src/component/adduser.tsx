import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { addUser as addUserAPI } from "../Service/userService";

const AddUser = () => {

  const users = useSelector(
    (state: any) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newId =
      users.length > 0
        ? Math.max(...users.map((user) => user.id)) + 1
        : 1;

    const newUser = {
      id: newId,
      firstName,
      lastName,
      age: Number(age),
    };

    try {
      const data = await addUserAPI(newUser);
    
      dispatch(
        addUser({
          ...data,
          id: newId,
        })
      );

      setFirstName("");
      setLastName("");
      setAge("");

      navigate("/user");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;