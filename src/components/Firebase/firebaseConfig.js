import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCuuBj2gw8LlaqGNbkp9I4o174kpeMNAo8",
    authDomain: "reciplan-b1fc6.firebaseapp.com",
    projectId: "reciplan-b1fc6",
    storageBucket: "reciplan-b1fc6.appspot.com",
    messagingSenderId: "140939047390",
    appId: "1:140939047390:web:067476b373ca85973d6d4f",
    measurementId: "G-LYMNH8EZY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = getFirestore();

export const user = uid => doc(firestore, `users/${uid}`);
