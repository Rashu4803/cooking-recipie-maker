import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4IjJGmbankVHI5r1jCn0WLHm44PFkt4c",
  authDomain: "rashu123-cooking.firebaseapp.com",
  projectId: "rashu123-cooking",
  storageBucket: "rashu123-cooking.appspot.com",
  messagingSenderId: "381057012041",
  appId: "1:381057012041:web:b1022d6436d14952e14a98",
  measurementId: "G-WM486F2NYQ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }