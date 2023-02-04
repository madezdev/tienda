import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";


export const App = () => {
  return (

   <>
      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element = { <ItemListContainer/> } />
          <Route path="/item/:id" element = { <ItemDetailContainer/> }/>
          <Route path="/category/:idCategoria" element = { <ItemListContainer/> }/>
          
        </Routes>

      </BrowserRouter>

    </>
    
  )
}

