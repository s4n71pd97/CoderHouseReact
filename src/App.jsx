import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer greeting="NUESTROS DESCUENTOS" />
      </div>
    </div>
  );
}

export default App;
