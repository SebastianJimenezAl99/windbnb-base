import { useState } from "react";
import logo from "../../img/logo.png"
import "./Navs.css"
import Modals from "../modals/Modals";

function Navs() {
    const [classActive, setClassActive] = useState(false);

    function mostrarModal() {
      const modalElemento = document.querySelector(".modal");
      if (classActive) {
        modalElemento.classList.remove("modal--show");
      }else{
        modalElemento.classList.add("modal--show");
      }
      
      setClassActive(!classActive); 
    }


    return(
        <nav className="navegacion">
        <Modals fun={mostrarModal}/>
        <img className="logo-principal" src={logo} />
        <div className="inputs-busquedad" onClick={mostrarModal}>
          <input type="text" className="input-busqueda" id="ubicacion" placeholder="Add location"/>
          <input type="text" className="input-busqueda" id="guest" placeholder="Add guest" />
          <i className="fa-solid fa-magnifying-glass logo"></i>
        </div>  
       </nav>
    )
}

export default Navs