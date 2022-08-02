import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
    </div>
  );
}

export default App;
