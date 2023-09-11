import { useState } from "react";
import logo from "../../img/logo.png"
import "./Navs.css"
import Modals from "../modals/Modals";

function Navs(props) {
    const [classActive, setClassActive] = useState(false);

    function mostrarModal() {
      const modalElemento = document.querySelector(".modal");
      if (classActive) {
        const inputLocation = document.querySelector("#location");
        const inputGuest = document.querySelector("#guest");
        let cadena = inputLocation.value
        let ciudad = cadena.split(',');
        ciudad = ciudad[0];

        props.fun(ciudad,inputGuest.value);
        modalElemento.classList.remove("modal--show");
        inputGuest.value ="";
        inputLocation.value="";
      }else{
        modalElemento.classList.add("modal--show");

      }
      
      setClassActive(!classActive); 
    }


    return(
        <nav className="navegacion">
        <Modals fun={mostrarModal}  data={props.data}/>
        <img className="logo-principal" src={logo} />
        <div className="inputs-busquedad" onClick={mostrarModal}>
          <input type="text" className="input-busqueda" id="ubicacion" placeholder="Add location" readOnly />
          <input type="text" className="input-busqueda" id="guest-nav" placeholder="Add guest" readOnly />
          <i className="fa-solid fa-magnifying-glass logo"></i>
        </div>  
       </nav>
    )
}

export default Navs