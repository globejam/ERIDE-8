import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMw6G4fB5VvrsynWyZRg-127YljIkbrPw",
  authDomain: "eride-563ce.firebaseapp.com",
  projectId: "eride-563ce",
  storageBucket: "eride-563ce.appspot.com",
  messagingSenderId: "77122368838",
  appId: "1:77122368838:web:75e04a7b00d9236348e147"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);

}


export default firebase.firestore();
