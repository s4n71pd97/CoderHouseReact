import CartWidget from "./CartWidget"
import "./NavBar.css"
export default function NavBar(){
    return(
    <div>
        <nav className="NavBar">
            <h1 className="Titulo">PCompras</h1>
            <ul className="Ul">
            <a className="A" href="#"><li className="Ui">Perifericos</li></a>
            <a className="A" href="#"><li className="Ui">Oficina</li></a>
            <a className="A" href="#"><li className="Ui">Gamer</li></a>
            <a className="A" href="#"><li className="Ui">Portatiles</li></a>
            <a className="A" hred="#"><li className="Ui"><CartWidget/></li></a>
            </ul>
            
        </nav>

    </div>
    )
}