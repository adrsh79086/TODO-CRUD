import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <h1>Welcome to User Management</h1>

      <Link to="/user">
        <button>View Users</button>
      </Link>

      <Link to="/adduser">
        <button>Add User</button>
      </Link>

    </div>
  );
};

export default Home;