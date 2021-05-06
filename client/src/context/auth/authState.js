<<<<<<< HEAD
import React, { useReducer } from "react";
=======
import React, { useReducer} from "react";
import axios from 'axios';
>>>>>>> 56a38191e74c1576585fd536057f30be4195d576
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };


  const [state, dispatch] = useReducer(authReducer, initialState);


<<<<<<< HEAD
// Load User

=======





// load User
const loadUser =() => console.log('loaduser');
>>>>>>> 56a38191e74c1576585fd536057f30be4195d576
// Register User
  const register = async formData => {
      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      };
      try {
          const res = await axios.post('/api/users', formData, config);

          dispatch ({
              type: REGISTER_SUCCESS,
              payload: res.data
          });
      } catch (error) {
        dispatch ({
            type: REGISTER_FAIL,
            payload: error.response.data.msg
        });
          
      }
  }
// Login User
<<<<<<< HEAD

// Logout

// Clear Errors
=======
const login =() => console.log('login');
// Logout 
const logout =() => console.log('logout');
// Clear Errors
const clearErrors =() => console.log('clearErrors');






>>>>>>> 56a38191e74c1576585fd536057f30be4195d576

return (
    <AuthContext.Provider
    value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
<<<<<<< HEAD
        error: state.error
=======
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
>>>>>>> 56a38191e74c1576585fd536057f30be4195d576
    }}
    >
        {props.children}
    </AuthContext.Provider>
);
};

export default AuthState;
