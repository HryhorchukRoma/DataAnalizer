import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApb0i3Sf36-ra0J7KLbyUzc3yv86v_9iY",
  authDomain: "data-2-10fea.firebaseapp.com",
  projectId: "data-2-10fea",
  storageBucket: "data-2-10fea.firebasestorage.app",
  messagingSenderId: "109935865416",
  appId: "1:109935865416:web:ce5f4a2f9aa145d0c9327d",
  measurementId: "G-WKKGL0RBZB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getSalesData = async () => {
  const colRef = collection(db, "Sales-Table");
  const snapshot = await getDocs(colRef);
  return snapshot.docs
    .map(doc => doc.data());
};
