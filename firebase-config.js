
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";


const firebaseConfig = {

  apiKey: "AIzaSyD-VodF_tlJgL0GQxCPd3W6xwR9vJiqVec",
  authDomain: "rent-tracker-46c0f.firebaseapp.com",
  databaseURL: "https://rent-tracker-46c0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rent-tracker-46c0f",
  storageBucket: "rent-tracker-46c0f.firebasestorage.app",
  messagingSenderId: "266927487120",
  appId: "1:266927487120:web:1722006a8734dc83794015",
  measurementId: "G-WLGQ9VNXNN"
  
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const db = getDatabase(app);
  export {app};