
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGEhb6yZKJa6tCiwNV-Op73B18i4cZmBk",
  authDomain: "dicord-178f0.firebaseapp.com",
  projectId: "dicord-178f0",
  storageBucket: "dicord-178f0.appspot.com",
  messagingSenderId: "220517054673",
  appId: "1:220517054673:web:d32f99150f6cae5102adf0"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider};
