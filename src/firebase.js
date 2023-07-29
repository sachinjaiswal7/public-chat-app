// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgAbO9dQBX77YsR46vk4K7OFaWugvSPKM",
  authDomain: "chat-app-with-react-d4924.firebaseapp.com",
  projectId: "chat-app-with-react-d4924",
  storageBucket: "chat-app-with-react-d4924.appspot.com",
  messagingSenderId: "1021383247791",
  appId: "1:1021383247791:web:4166cd834cdddf0e0dd15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;