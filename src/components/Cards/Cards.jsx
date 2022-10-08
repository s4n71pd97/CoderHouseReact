import {Link} from "react-router-dom"

export default function Cards(Props) {
  return (
    <div className ="pt-20">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/Auto/${Props.id}`}>
          <img
            className="p-8 rounded-t-lg"
            src={Props.Imagen}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/Auto/${Props.id}`}>
            <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {Props.Modelo}
            </h6>
            <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {Props.Marca}
            </h6>
            <h6 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              {Props.Año}
            </h6>
          </Link>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {Props.Precio}
            </span>
            <Link to="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Agregar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
