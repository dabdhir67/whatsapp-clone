import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAVq0Ebt0whXvdXYu-rMra5Fff3fjNxdQ",
    authDomain: "whatsapp-clone-a25ce.firebaseapp.com",
    projectId: "whatsapp-clone-a25ce",
    storageBucket: "whatsapp-clone-a25ce.appspot.com",
    messagingSenderId: "826186800613",
    appId: "1:826186800613:web:5ad403aff229efb458e30c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;