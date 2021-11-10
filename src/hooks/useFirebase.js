import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Pages/SignIn/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () =>{
     const [user,setUser] = useState({})

    const auth = getAuth();
    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    }
}