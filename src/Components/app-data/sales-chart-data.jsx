import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

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
