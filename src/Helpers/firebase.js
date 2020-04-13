import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyANjro6NvVJgK4RG4Z7Werdg_gsOdlq3yc",
    authDomain: "help-cue.firebaseapp.com",
    databaseURL: "https://help-cue.firebaseio.com",
    projectId: "help-cue",
    storageBucket: "",
    messagingSenderId: "350949846173",
    appId: "1:350949846173:web:6e843d67c3f5c8952af874"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const dbRef = firebase.database().ref();

  

export default firebase;


