import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCywptPJ5wp3G825EpATbd2G8FhZK7xEzw",
  authDomain: "ride-stage-52708.firebaseapp.com",
  projectId: "ride-stage-52708",
  storageBucket: "ride-stage-52708.appspot.com",
  messagingSenderId: "739114358647",
  appId: "1:739114358647:web:3d856d1ecf7ca5fdba7372"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
