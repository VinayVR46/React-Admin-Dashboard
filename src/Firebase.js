import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAox0VNCrY8fwt1zxBfUqNC4fqc_VF9LC4",
  authDomain: "react-dashboard-bb2d2.firebaseapp.com",
  projectId: "react-dashboard-bb2d2",
  storageBucket: "react-dashboard-bb2d2.appspot.com",
  messagingSenderId: "770545941810",
  appId: "1:770545941810:web:d868e76db50e4649f0ab2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()