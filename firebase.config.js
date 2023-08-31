import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    databaseURL:"https://rumi-library.firebaseio.com",
    apiKey: "AIzaSyBrRz9gNXF-uxY9AvcbWbPTAibeowasMEM",
    authDomain: "rumi-library.firebaseapp.com",
    projectId: "rumi-library",
    storageBucket: "rumi-library.appspot.com",
    messagingSenderId: "864155359313",
    appId: "1:864155359313:web:2da5cd9429699a17098070",
    measurementId: "G-7L17DWECP3"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };