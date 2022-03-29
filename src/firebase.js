import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAboDYhVpACLRMLVHmWyzptII59L2wf2MA",
  authDomain: "whatsapp-chat-clone-86d26.firebaseapp.com",
  projectId: "whatsapp-chat-clone-86d26",
  storageBucket: "whatsapp-chat-clone-86d26.appspot.com",
  messagingSenderId: "913941216299",
  appId: "1:913941216299:web:a356f97eddd9b10e29be6e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, app };
