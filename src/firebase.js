import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDarYoZdFrdXt8DibRn9aOdv6dq94v01Hg",
    authDomain: "linkedin-clone-f3aa9.firebaseapp.com",
    projectId: "linkedin-clone-f3aa9",
    storageBucket: "linkedin-clone-f3aa9.appspot.com",
    messagingSenderId: "70009180266",
    appId: "1:70009180266:web:9c2089f096d683113dfa13",
    measurementId: "G-0WB6DJEZB8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};