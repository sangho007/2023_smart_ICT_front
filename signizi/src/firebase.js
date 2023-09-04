// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW2Gbxhb18v75F43ugMlmea5AZbjfLi5s",
    authDomain: "lifeguard-be776.firebaseapp.com",
    projectId: "lifeguard-be776", 
    storageBucket: "lifeguard-be776.appspot.com" ,
    messagingSenderId: "770452291676",
    appId:"1:770452291676:web:c6d5ce662197791ae26699", 
    measurementId: "G-1YJJCF9ZYD"
};
// Initialize Firebase
// const app = initializeApp (firebaseConfig);
// const analytics = getAnalytics (app);

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export {firestore};


