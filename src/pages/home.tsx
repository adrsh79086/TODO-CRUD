import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <h1>Welcome to User Management</h1>

   <div className="button-container">
  <Link to="/user">
    <button>View Users</button>
  </Link>

  <Link to="/adduser">
    <button>Add User</button>
  </Link>
</div>

    </div>
  );
};

export default Home;