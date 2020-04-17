// Initialize Firebase
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDtLrbiew0lF6TAJeUIG8yMKLO2r8RT4Lc",
    authDomain: "spanish-grammar-online.firebaseapp.com",
    databaseURL: "https://spanish-grammar-online.firebaseio.com",
    projectId: "spanish-grammar-online",
    storageBucket: "spanish-grammar-online.appspot.com",
    messagingSenderId: "922571209820",
    appId: "1:922571209820:web:7aabe8fe3f0d42f99d7a99"
};

let fire = firebase.initializeApp(config);

export default fire;