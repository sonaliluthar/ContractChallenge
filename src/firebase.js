import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDe8Gqar1s9pLN97S-u0j2At3wVFa5XuNM",
  authDomain: "fir-contracts.firebaseapp.com",
  databaseURL: "https://fir-contracts.firebaseio.com",
  projectId: "fir-contracts",
  storageBucket: "",
  messagingSenderId: "171218755794"
};
firebase.initializeApp(config);

export default firebase;
