// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc,  addDoc, getDoc, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXOguEe8LYU6ezQ6fr3T1_BzrYxyM_DZw",
  authDomain: "tienda-coder-7b231.firebaseapp.com",
  projectId: "tienda-coder-7b231",
  storageBucket: "tienda-coder-7b231.appspot.com",
  messagingSenderId: "959471839461",
  appId: "1:959471839461:web:e73350c1dd1f3b9245cc0c",
  measurementId: "G-8QYM05Y2DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();


 
export const cargarBDD = async () => {

  const promise = await fetch('./json/productos.json');
  const productos = await promise.json();

  productos.forEach( async prod => {
    await addDoc(collection(db,"productos"),{
      idCategoria: prod.idCategoria,
      nombre: prod.nombre,
      marca: prod.marca,
      descripcion: prod.descripcion,
      precio: prod.precio,
      stock: prod.stock,
      img: prod.img,
    })
  });
} 

export const getProductos = async () => {
  const productos = await getDocs( collection( db, "productos" ) );
  const items = productos.docs.map( prod => {
    return {...prod.data(), id: prod.id }
  })
  console.log(items);
}

