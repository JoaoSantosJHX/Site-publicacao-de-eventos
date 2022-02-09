import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmnk7rrwvf-qKaF621g-R--vIjZLBAjwo",
  authDomain: "eventos-7afbc.firebaseapp.com",
  projectId: "eventos-7afbc",
  storageBucket: "eventos-7afbc.appspot.com",
  messagingSenderId: "670401102223",
  appId: "1:670401102223:web:60da82ad4a89689e92cbfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth

export const storage = getStorage(app)

