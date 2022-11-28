import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBGQ_fUQ-3coG_1u0mHohUrUxIGhMSFmQo",
  authDomain: "mytrello-livecampus.firebaseapp.com",
  projectId: "mytrello-livecampus",
  storageBucket: "mytrello-livecampus.appspot.com",
  messagingSenderId: "510700141810",
  appId: "1:510700141810:web:91b5d5c869e59c8b94246b"
};

export const app = initializeApp(firebaseConfig);
