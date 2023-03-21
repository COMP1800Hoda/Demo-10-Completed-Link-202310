//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyBd-daBcbDBltXlZiAfVVHkkKmuLx4BUio",
  authDomain: "fir-fa683.firebaseapp.com",
  projectId: "fir-fa683",
  storageBucket: "fir-fa683.appspot.com",
  messagingSenderId: "807252426865",
  appId: "1:807252426865:web:1074289ca48ac8db609bd0"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const storage = firebase.storage();
