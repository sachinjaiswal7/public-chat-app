import "./App.css";
import Home from "./Components/Home";
import app from "./firebase.js";
import { useEffect, useRef, useState } from "react";
import SingUpPage from "./Components/SingUpPage";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

// handling login with inBuilt GoogleAuthProvider and signInWithPopup of firebase
const loginHandle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    alert("SomeThing Went Wrong");
  }
};

//handling logout with inBuilt signOut function of the firebase/auth
const logoutHandle = () => {
  signOut(auth);
};

const q = query(collection(db,"Messages"), orderBy("createdAt", 'asc'));
function App() {
  const scrollRef = useRef(null);
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // this functions works when the messages by a user gets submitted
  const msgSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
     await addDoc(collection(db, "Messages"), {
        uid: user.uid,
        photoUrl: user.photoURL,
        createdAt: serverTimestamp(),
        message,
      });
     
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data);
    });

    const unsubscribeMessage =  onSnapshot(q,(snapshot) => {
      let arr = [];
      arr = snapshot.docs.map((item) => {
        return {
          id : item.id,
          ...item.data()
          
        }
      })
      setMessages(arr);
    })

    return () => {
      unsubscribe();
      unsubscribeMessage();
    };
  }, []);

  useEffect(() => {
    if(scrollRef.current){
     scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  },[messages])

  return (
    <div className="topClass">
      {user ? (
        <Home
          user={user}
          messages={messages}
          message={message}
          setMessage={setMessage}
          logoutHandle={logoutHandle}
          msgSubmitHandle={msgSubmitHandle}
          scrollRef={scrollRef}
        />
      ) : (
        <SingUpPage setUser={setUser} loginHandle={loginHandle} />
      )}
    </div>
  );
}

export default App;
