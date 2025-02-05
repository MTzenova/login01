// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW_qerGRQo-8tT7SvzR7n8xO9ylJnDvaA",
  authDomain: "login-firebase-d6e68.firebaseapp.com",
  projectId: "login-firebase-d6e68",
  storageBucket: "login-firebase-d6e68.firebasestorage.app",
  messagingSenderId: "438528827501",
  appId: "1:438528827501:web:ef3ef1e16ce5b267cc1f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);
