import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, runTransaction } from "firebase/database";

// 🔥 Configuración de Firebase (Asegúrate de que sea correcta)
const firebaseConfig = {
    apiKey: "AIzaSyDerpK5WdlmQyWDXEEQwQCD8LrqAnI76Fc",
    authDomain: "fartcupid.firebaseapp.com",
    databaseURL: "https://fartcupid-default-rtdb.europe-west1.firebasedatabase.app/",  // 🔥 Necesario para Realtime Database
    projectId: "fartcupid",
    storageBucket: "fartcupid.appspot.com",  // 🔥 CORREGIDO
    messagingSenderId: "819022939643",
    appId: "1:819022939643:web:d23a30e4ad3cb4986b775e",
    measurementId: "G-3EW7BYWGFV"
};

// 🔥 Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, set, runTransaction };  // 🔥 `increment` eliminado porque no se usa en Realtime Database
