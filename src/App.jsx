import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";
import { CarritoProvider } from "./context/CarritoContext";
import { getProductos } from "./firebase/firebase";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const App = () => {

  // cargarBDD()
 //  getProductos()

  return (

   <>
      <BrowserRouter>
        <CarritoProvider>
          <Header/>
          <Routes>
            <Route path="/" element = { <ItemListContainer/> } />
            <Route path="/item/:id" element = { <ItemDetailContainer/> }/>
            <Route path="/category/:idCategoria" element = { <ItemListContainer/> }/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <ToastContainer/>
        </CarritoProvider>
      </BrowserRouter>

    </>
    
  )
}

