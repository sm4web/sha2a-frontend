// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOvnxlfh-rXWh4VrBTouJ-BTFiMOE_3i4",
    authDomain: "sha2a-a669e.firebaseapp.com",
    databaseURL: "https://sha2a-a669e-default-rtdb.firebaseio.com",
    projectId: "sha2a-a669e",
    storageBucket: "sha2a-a669e.appspot.com",
    messagingSenderId: "347487545133",
    appId: "1:347487545133:web:59e2deb14a0eee0066d5a4",
    measurementId: "G-Q2M4PE7GHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export default app