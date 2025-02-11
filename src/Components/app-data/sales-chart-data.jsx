import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

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

export const fetchSalesData = async () => {
  const shopsRef = collection(db, "Shops");
  const shopsSnapshot = await getDocs(shopsRef);
  const shopsData = shopsSnapshot.docs.map(doc => doc.data());

  let seriesData = [];

  for (const { key, name } of shopsData) {
    const salesQuery = query(collection(db, "Sales-Table"), where("shopID", "==", key));
    const salesSnapshot = await getDocs(salesQuery);
    
    const totalSales = salesSnapshot.docs.reduce((sum, doc) => sum + (doc.data().amount || 0), 0);

    seriesData.push({ name, y: totalSales });
  }

  return {
    chart: { type: "column" },
    title: { text: "Revenue Comparison of All Shops" },
    xAxis: { type: "category" },
    yAxis: { title: { text: "Revenue ($)" } },
    legend: { enabled: false },
    series: [{ name: "Revenue", colorByPoint: true, data: seriesData }],
  };
};
