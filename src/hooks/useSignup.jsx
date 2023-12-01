import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useState } from "react";

function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signup = async (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCrendential) => {
        const user = userCrendential.user;
        return user;
      })
      .then(() => {
        updateProfile({
          displayName: displayName,
        });

        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return { user, error, signup };
}

export default useSignup;
