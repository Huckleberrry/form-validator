import React, { useReducer} from "react";
import axios from 'axios'
import AuthContext from "./authContext";
import setAuthToken from '../../utils/setAuthToken';
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  LOGIN_SUCCESS,
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
const loadUser = async () => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({type: USER_LOADED, payload: res.data});
  } catch (error) {
    dispatch({type: AUTH_ERROR});
  }

};
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

    loadUser();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });
  }
};


// Login User
const login = async FormData => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/auth', FormData,config);

    dispatch ({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    loadUser();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg
    });
  }
};

// Logout
const logout = () => dispatch({type: LOGOUT});
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
      logout,
      clearErrors,
    }}
    >
        {props.children}
    </AuthContext.Provider>
);
};

export default AuthState;


