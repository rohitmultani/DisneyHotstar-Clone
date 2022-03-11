import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
        apiKey: "AIzaSyDxyKcnmGUOjIzgH8JYzkayOcSYG9QPJPo",
        authDomain: "hotstarclone-93c10.firebaseapp.com",
        projectId: "hotstarclone-93c10",
        storageBucket: "hotstarclone-93c10.appspot.com",
        messagingSenderId: "847743585338",
        appId: "1:847743585338:web:28262ad72d5a592c3ff903",
        measurementId: "G-B0PW8JGPM7"
      
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
