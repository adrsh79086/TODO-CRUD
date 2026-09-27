import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Adduser from "./pages/adduser";
import User from "./pages/user";
import Edituser from "./pages/edituser";

function App() {
  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/user" element={<User/>} />

        <Route path="/adduser" element={<Adduser/>} />

        <Route path="/edituser/:id" element={<Edituser/>}/>

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;