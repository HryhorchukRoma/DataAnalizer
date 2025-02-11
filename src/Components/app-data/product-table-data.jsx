import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdgPvuf7CK0e6A975Wt9WtAelsXKTemZA",
  authDomain: "data-ffb9c.firebaseapp.com",
  projectId: "data-ffb9c",
  storageBucket: "data-ffb9c.firebasestorage.app",
  messagingSenderId: "794220719364",
  appId: "1:794220719364:web:88dbbc3eefe30e31c67451",
  measurementId: "G-7KZSZ7VC5F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductTableData = async () => {
  const colRef = collection(db, "Product-Sales");
  const snapshot = await getDocs(colRef);
  return snapshot.docs
    .map(doc => doc.data())
    .filter(item => item.name && item.salesAmount && item.salesTotal)
    .map(({ name, salesAmount, salesTotal }) => ({
      name,
      y: salesAmount,
      customTooltip: `Total Sales: $${salesTotal}`
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
