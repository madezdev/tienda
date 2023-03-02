// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc,  addDoc, getDoc, getDocs, query, where } from 'firebase/firestore'
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



export const getProductos = async (categoria) => {
 
  const data = categoria ?  query(collection(db, "productos"), where("idCategoria", "==", categoria)): collection( db, "productos" )
  const productos = await getDocs( data );
  const items = productos.docs.map( prod => {
    return {...prod.data(), id: prod.id }
  })
 return items
}


export const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}

export const updateProducto = async(id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}

//Create orden Compra

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal, 
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
}

