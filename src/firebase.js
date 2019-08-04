import fb from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1e-jRLHxwdUG-Xm8viGAM_vn-QMdvlIQ",
    authDomain: "murointerativo-42c8f.firebaseapp.com",
    databaseURL: "https://murointerativo-42c8f.firebaseio.com",
    projectId: "murointerativo-42c8f",
    storageBucket: "",
    messagingSenderId: "847430358166",
    appId: "1:847430358166:web:2401b3bd620568df"
  };
  // Initialize Firebase
  const firebase = fb.initializeApp(firebaseConfig);

  export default firebase;

