import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {userlogin} from "../Api"

import Cookies from "universal-cookie";


const cookies = new Cookies();
// const navigate = useNavigate();

export const loginUser = createAsyncThunk(
  'login',
  async (userData, { rejectWithValue }) => {
    try {
        console.log("Trigger")
      const response = await axios.post(userlogin, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("state")

      if (response.data.token) {
     
        cookies.set("token", response.data.token)
        // localStorage.setItem('token', response.data.token);
    
      } else {
       
        alert(response.data.message);
       
        return rejectWithValue(response.data.message);
      }
    } catch (error) {

    

      return rejectWithValue(error.response.data.message);
    }
  }
);

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    userToken: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload;
        alert('Welcome!');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        alert(state.error);
      });
  },
});

export default LoginSlice.reducer;
