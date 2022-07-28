import firebase from "firebase";

class AuthService {
  login() {
    const authProvider = new firebase.auth().GoogleAuthProvider();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
