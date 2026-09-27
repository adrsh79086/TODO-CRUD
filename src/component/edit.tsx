import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser as updated} from "../Service/userService";
import { editUser  } from "../redux/userSlice";


const EditUser = () => {
            const{id} = useParams();
            const dispatch = useDispatch();
            const navigate = useNavigate();
            const users = useSelector(
                (state : any) => state.user
            )
       console.log(users);
         
       const user  = users.find((userr)=>userr.id == id) ;

       const [firstName ,setFirstname] = useState(user?.firstName || " ");
        const [lastName ,setlastname] = useState(user?.lastName || " ");
        const [age, setage] = useState(user?.age?.toString() || "");

        const handleedit = async (e) => {
                e.preventDefault();
                if(!user) return;
              const updateuser = {
                id: user.id,
                 firstName : firstName,
                 lastName : lastName,
                 age : Number(age)
              }

              try{
                const data = await updated(
                    user.id,
                    updateuser
                );

                dispatch(editUser({
                    ...data,
                    id:user.id,
                }));

                navigate("/user");
              }catch(eroor){
                console.log("eroor hai beta dobra try kr chup chap",eroor);
                
              }
        }
  return (

    <>  <h2>Edit User</h2>
  
   <form onSubmit={handleedit}>

    <input type="text" 
    placeholder="firstname"
    value={firstName}
    onChange={(e)=>setFirstname(e.target.value)}
     />

<input type="text" 
    placeholder="lastname"
    value={lastName}
    onChange={(i)=>setlastname(i.target.value)}
     />
<input type="number" 
    placeholder="age"
    value={age}
    onChange={(e)=>setage(e.target.value)}
     />

  <button type="submit" >Edit</button>

   </form>
    </>
  )
}

export default EditUser
