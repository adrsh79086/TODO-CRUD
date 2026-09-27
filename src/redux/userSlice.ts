import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    addUser : (state,action) => {
      state.push(action.payload);
    },
    removeUser : (state,action) => {
      return state.filter((user)=> user.id !== action.payload)
    },
    editUser : (state,action) => {
        const index =  state.findIndex((i)=> i.id ==+ action.payload.id);
        if(index !== -1){
          state[index] = action.payload;
        }
    }
  },
});

export const { setUser,addUser,removeUser,editUser} = userSlice.actions;

export default userSlice.reducer;