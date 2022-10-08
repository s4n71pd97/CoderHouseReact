const data = [
  {
    id: 1,
    marca: "Dodge",
    modelo: "Intrepid",
    año: 1994,
    precio: "$799.702",
    imagen: null,
    categoria: "auto",
  },
  {
    id: 2,
    marca: "Subaru",
    modelo: "Alcyone SVX",
    año: 1992,
    precio: "$799.049",
    imagen: null,
    categoria: "camioneta",
  },
  {
    id: 3,
    marca: "Eagle",
    modelo: "Vision",
    año: 1997,
    precio: "$702.052",
    imagen: null,
    categoria: "auto",
  },
  {
    id: 4,
    marca: "Toyota",
    modelo: "Prius",
    año: 2008,
    precio: "$893.073",
    imagen: null,
    categoria: "camioneta",
  },
  {
    id: 5,
    marca: "Jaguar",
    modelo: "XJ Series",
    año: 1999,
    precio: "$751.930",
    imagen: null,
    categoria: "auto",
  },
  {
    id: 6,
    marca: "Chevrolet",
    modelo: "Venture",
    año: 2005,
    precio: "$931.828",
    imagen: null,
    categoria: "camioneta",
  },
  {
    id: 7,
    marca: "Jeep",
    modelo: "Commander",
    año: 2007,
    precio: "$817.131",
    imagen: null,
    categoria: "auto",
  },
  {
    id: 8,
    marca: "Mitsubishi",
    modelo: "Diamante",
    año: 1992,
    precio: "$797.412",
    imagen: null,
    categoria: "camioneta",
  },
  {
    id: 9,
    marca: "Oldsmobile",
    modelo: "Aurora",
    año: 1999,
    precio: "$949.980",
    imagen: null,
    categoria: "auto",
  },
  {
    id: 10,
    marca: "Dodge",
    modelo: "Charger",
    año: 2007,
    precio: "$938.186",
    imagen: null,
    categoria: "camioneta",
  },
];

export default function getAutos() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export function getAutosID(id) {
  return new Promise((resolve, reject) => {
    let AutoResol = data.find((item) => {
      return item.id === Number(id);
    });

    resolve(AutoResol);
  });
}

export function getAutoCategoria(Categoria){
  return new Promise((resolve, reject) => {
     let filtros = data.filter((item) => {
      return item.categoria === Categoria
    })
    resolve(filtros);
  });
 

}
