import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { api, UserType } from '../../api/api';


type UsersStateType = {
  users: Array<UserType>
}

const initialState: UsersStateType = {
  users: []
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setUsers: (state, action: PayloadAction<{ users: Array<UserType> }>) => {
      state.users = action.payload.users;
      
    },
    setLikeUser: (state, action: PayloadAction<{ id: number }>) => {
       const userIndex = state.users.findIndex(user => user.id === action.payload.id)
       if (userIndex >= 0) {
         state.users[userIndex].like = state.users[userIndex].like ? false : true  
        }
        
      },
      deleteUser: (state, action: PayloadAction<{ id: number }>) => {
        const userIndex = state.users.findIndex(user => user.id === action.payload.id)
        if (userIndex >= 0) {
          state.users.splice(userIndex, 1)  
         }
    }
  },

});

export const { setUsers, setLikeUser, deleteUser } = usersSlice.actions;

export const getUsersThunk = (): AppThunk =>
    (dispatch) => {

      api.getUsers().then(res => {
        const users = res.data.map((user) => (
          {
            id: user.id,
            avatar: user.avatar,
            first_name: user.first_name,
            email: user.email,
            last_name: user.last_name,
            like: false

          }
        ))

        dispatch(setUsers({users}))

      })
    };

export default usersSlice.reducer;
