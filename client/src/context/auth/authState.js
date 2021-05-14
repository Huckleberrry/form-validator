import React, { useReducer} from "react";
import axios from 'axios'
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  };


  const [state, dispatch] = useReducer(authReducer, initialState);


// Load User
const loadUser = () => console.log('loadUser');
// Register User
const register = async FormData => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/users', FormData,config);

    dispatch ({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });
  }
};


// Login User
const login = () => console.log('login');

// Logout
const logOut = () => console.log('logOut');
// Clear Errors
const clearErrors = () => dispatch({
  type: CLEAR_ERRORS
});




return (
    <AuthContext.Provider
    value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      register,
      loadUser,
      login,
      logOut,
      clearErrors,
    }}
    >
        {props.children}
    </AuthContext.Provider>
);
};

export default AuthState;


