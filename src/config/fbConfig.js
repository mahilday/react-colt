import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDHWKZdpxC3irwdJhRKV1Z-O04xt4XnfyM",
  authDomain: "bulkfood.firebaseapp.com",
  databaseURL: "https://bulkfood.firebaseio.com",
  projectId: "bulkfood",
  storageBucket: "bulkfood.appspot.com",
  messagingSenderId: "929336228168",
  appId: "1:929336228168:web:8ee3e0628bc85469891b7d",
  measurementId: "G-R1HXLFQY5H",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase
