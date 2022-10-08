import Cards from "../Cards/Cards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getAutos, {getAutoCategoria} from "../../MockAPI/MockAPI";


export default function ItemListContainer(props) {
  const [AutosList, setAutosList] = useState([]);
  const CategoriaID = useParams().CategoriaID;
  useEffect(() => {
    if (CategoriaID === undefined) {
      getAutos().then((data) => {
        setAutosList(data);
      });
    }else{
      getAutoCategoria(CategoriaID).then((data) => {
        setAutosList(data);
    });
  }
  }, [CategoriaID]);
  return (
    <div>
      <div>
        <h1 className="font-mono tracking-wider decoration-double text-orange-700 text-center text-4xl pt-20 pb-20">
          {props.greeting}
        </h1>
        <div className="grid grid-cols-3 gap-3 pl-12">
          {AutosList.map((auto) => {
            return (
              <Cards
                key={auto.id}
                id={auto.id}
                Modelo={auto.modelo}
                Marca={auto.marca}
                Año={auto.año}
                Precio={auto.precio}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
