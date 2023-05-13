import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebasse/firebase.cofig";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  // User Create
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile
  const profileUpdate = (user, name) => {
    return updateProfile(user, {
      displayName: "joy",
    });
  };

  // current user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
      setLoding(false);
    });
  }),
    [];

  const authInfo = {
    user,
    signUp,
    profileUpdate,
    loginUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
