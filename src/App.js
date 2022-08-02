import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Login from "./Login"
import Hero from "./Hero"
import { auth } from "./firebase-config";
import "./App.css"

function App() {

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        email,
        password
      );
    } catch (error){
      switch(error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message)
          break;
        case "auth/weak-password":
          setPasswordError(error.message)
      }
    }
  }

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      switch(error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message)
          break;
        case "auth/wrong-password":
          setPasswordError(error.message)

      }
    }
  };

  const logout = async () => {
    clearInputs()
    clearErrors()
    await signOut(auth);
  };

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }


  return (
    <div className="App">
      {user ? (
        <>
        <Hero
        logout = {logout}
        user = {user}>
        </Hero>
        </>
      ) : (
        <>
        <Login 
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        handleLogin = {handleLogin}
        register = {register}
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
        ></Login>
        </>
      )}
    </div>
  );
}

export default App;
