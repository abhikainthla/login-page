import { auth, googleProvider } from "./firebase"; 
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; 
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
      alert("Error logging out");
    }
  };

  return (
    <main>
      <div className="login-page">
        <div className="login-image">
          <div className="login_guitar"></div>
          <h3 className="head"><span>Login to Continue</span></h3>
        </div>
        <div className="login-button">
          <button onClick={signInWithGoogle}><b><span>Login with Google</span></b></button>
        </div>
        <div className="or">
          <span>OR</span>
        </div>
        <div className="login-button2">
          <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-container">
          <button onClick={signIn}>Sign in</button>
          <button onClick={logOut}>Log Out</button> 
          </div>
        </div>
        <div className="login-footer">
          <span>All your personal details are safe with us.</span>
        </div>
      </div>
    </main>
  );
};
