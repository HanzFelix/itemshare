import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",
  authDomain: "itemshare-68ae3.firebaseapp.com",
  projectId: "itemshare-68ae3",
  storageBucket: "itemshare-68ae3.appspot.com",
  messagingSenderId: "468617277076",
  appId: "1:468617277076:web:6c0ce2cd38ad48ca66ce81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebase.firestore();
