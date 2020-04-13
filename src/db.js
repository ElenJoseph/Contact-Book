import firebase from 'firebase'
 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_En26dHbWOEVc1ld6cAkgR1dAb_c6wwo",
    authDomain: "contact4-5c824.firebaseapp.com",
    databaseURL: "https://contact4-5c824.firebaseio.com",
    projectId: "contact4-5c824",
    storageBucket: "contact4-5c824.appspot.com",
    messagingSenderId: "422176516230",
    appId: "1:422176516230:web:b64cce8ae2081417dfc907"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()
