// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6u01W2sZ2Z8mIx_yEVp0qJpgboLyvgmU",
  authDomain: "linkedin-clone-2d4ab.firebaseapp.com",
  projectId: "linkedin-clone-2d4ab",
  storageBucket: "linkedin-clone-2d4ab.appspot.com",
  messagingSenderId: "20759543228",
  appId: "1:20759543228:web:8088476ee835d887153fb9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
