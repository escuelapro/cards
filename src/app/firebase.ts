import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_APP_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const user = process.env.REACT_APP_FAKE_USER;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export const cardsRef = doc(db, "cards", user!);
export const imagesRef = ref(storage, "image");

export { storage };
export default db;
