import * as firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD_Vire-H1uZfE6oioDcj95pATOg1HK05E",
    authDomain: "barterapp-45a44.firebaseapp.com",
    databaseURL: "https://barterapp-45a44.firebaseio.com",
    projectId: "barterapp-45a44",
    storageBucket: "barterapp-45a44.appspot.com",
    messagingSenderId: "367647465700",
    appId: "1:367647465700:web:496baba132228f63708cf1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();