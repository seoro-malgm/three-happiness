// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF8fss1FOMSpJuMIBJ5SPtaDekIOyj6b0",
  authDomain: "three-happiness-app.firebaseapp.com",
  projectId: "three-happiness-app",
  storageBucket: "three-happiness-app.appspot.com",
  messagingSenderId: "990561982132",
  appId: "1:990561982132:web:7e2741c390804e5273e9e1",
  measurementId: "G-HY4EC9H836",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// 이 값을 사용합니다.
export { analytics, db };
