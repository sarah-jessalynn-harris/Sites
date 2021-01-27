// Initialize Firebase
import firebase from 'firebase';
import 'firebase/firestore';   // for cloud firestore
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage

var config = {
    apiKey: "AIzaSyBfjcp_YIqvJLL8GirEkL8KGdaqTFTH4FI",
    authDomain: "kitchen-control-panel.firebaseapp.com",
    databaseURL: "https://kitchen-control-panel.firebaseio.com",
    projectId: "kitchen-control-panel",
    storageBucket: "kitchen-control-panel.appspot.com",
    messagingSenderId: "357777311316",
    appId: "1:357777311316:web:5a66c0e59a69c7fe924fc1",
    measurementId: "G-5LJK77ENJ5"
};

let fire = firebase.initializeApp(config);


export default fire;