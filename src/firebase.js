import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjsSeBRd_vJei3Zr0RkOg0xZcAAhtUdoA",
  authDomain: "instagram-clone-d59d3.firebaseapp.com",
  databaseURL: "https://instagram-clone-d59d3.firebaseio.com",
  projectId: "instagram-clone-d59d3",
  storageBucket: "instagram-clone-d59d3.appspot.com",
  messagingSenderId: "725041013047",
  appId: "1:725041013047:web:60e2e37e87b3e8c5befab2",
  measurementId: "G-K8FNMQQSV3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
