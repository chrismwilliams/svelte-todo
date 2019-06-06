import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase settings from console
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(config);

export const Auth = firebase.auth();
export const Firestore = firebase.firestore();
