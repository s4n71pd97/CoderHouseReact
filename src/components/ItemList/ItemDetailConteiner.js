import CardDetaild from "../Cards/CardDetaild";
import { useState, useEffect } from "react";
import { getAutosID } from "../../MockAPI/MockAPI";
import { useParams } from "react-router-dom";

export default function ItemDetailConteiner(Props) {
  const [Autos, setAutos] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    getAutosID(id).then((data) => {
      setAutos(data);
    });
  }, []);
  return (
    <div className="pl-15">
      <CardDetaild
        Key={Autos.id}
        id={Autos.id}
        Modelo={Autos.modelo}
        Marca={Autos.marca}
        Precio={Autos.precio}
      />
    </div>
  );
}
