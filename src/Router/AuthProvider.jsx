import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const axiosPublic = useAxiosPublic();

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const gitHubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, GitHubProvider);
   };

   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);
         if (currentUser) {
            const userInfo = { email: currentUser.email };
            axiosPublic.post("/jwt", userInfo).then((res) => {
               if (res.data.token) {
                  localStorage.setItem("access-token", res.data.token);
               }
            });
         } else {
            localStorage.removeItem("access-token");
         }

         setLoading(false);
      });
      return () => {
         return unSubscribe();
      };
   }, [axiosPublic]);

   const authInfo = {
      user,
      loading,
      createUser,
      login,
      googleLogin,
      gitHubLogin,
      logOut,
   };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
