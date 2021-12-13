// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage";

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyDgxzT7IESHk-PWDBNrKS9tWweo7HdZIrk",
    authDomain: "martini-1301.firebaseapp.com",
    projectId: "martini-1301",
    storageBucket: "martini-1301.appspot.com",
    messagingSenderId: "623568499811",
    appId: "1:623568499811:web:0022bfc3b32e515d857456"
});

// Initialize Firebase
export default app;
export const auth = app.auth();