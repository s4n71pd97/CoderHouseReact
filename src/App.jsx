import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRoute, BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailConteiner from "./components/ItemList/ItemDetailConteiner";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="NUESTROS DESCUENTOS" />}
        />
         <Route
          path="/Categoria/:CategoriaID"
          element={<ItemListContainer/>}
        />
        <Route path="/Auto/:id" element={<ItemDetailConteiner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
