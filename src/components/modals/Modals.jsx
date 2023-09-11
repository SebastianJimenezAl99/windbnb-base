import { useEffect, useState } from "react";
import "./Modals.css"
function Modals(props) {
    const ciudades = [];
    const [adults, setAdults] = useState(0);
    const [children, setchildren] = useState(0);


    function buscarCiudad(){
        for (const data of props.data) {
            const city = data.city;
  
            
            if (!ciudades.includes(city)) {
                ciudades.push(city);
            }
        }
    }

    function selecionarCiudad(nombre){
        const inputLocation = document.querySelector("#location");
        inputLocation.value = nombre;
        const inputUbicacion = document.getElementById("ubicacion");
        inputUbicacion. value = nombre;
    }

    function cantidadGuest(signo,persona){
        let adultos = adults;
        let ninos = children;
        const inputGuest = document.querySelector("#guest");
        const inputGuest_nav = document.querySelector("#guest-nav");
        if (persona == "adults") {
            if (signo == "+") {
                if (adultos+ninos !== 10) {
                    setAdults(++adultos)
                }
                
            }else{
                if (adults !== 0) {
                    setAdults(--adultos);
                }
            }
        }else{
            if (signo == "+") {
                if (adultos+ninos !== 10){
                    setchildren(++ninos)
                }
                
            }else{
                if (ninos !== 0) {
                    setchildren(--ninos)
                }
            }
        }
        
       inputGuest.value= ninos+adultos == 0 ? "" : ninos+adultos;
       inputGuest_nav.value = ninos+adultos == 0 ? "" : ninos+adultos;
    }
    
    function iniciarLocation() {
        console.log("Hola");
    }

    buscarCiudad();
    

    return(
        <section className="modal">
            <div className="modal_contenedor">
                <div className="modal-inputs">
                    <div className="div-input nivel-1" onClick={iniciarLocation}>
                        <label htmlFor="location">LOCATION</label>
                        <input type="text" placeholder="Add Location" id="location" name="location" className="modal-filtros-input" readOnly />
                    </div>
                    <div className="div-input nivel-2">
                        <label htmlFor="guest">GUEST</label>
                        <input type="text" placeholder="Add Guest" id="guest" name="guest" className="modal-filtros-input" readOnly />
                    </div>
                    <div className="nivel-3">
                        <button onClick={() => 
                            {
                                
                                setAdults(0) 
                                setchildren(0)
                                const inputGuest = document.querySelector("#guest");
                                const inputGuest_nav = document.querySelector("#guest-nav");
                                inputGuest.value == "" ? inputGuest_nav.value ="": "";
                                const inputLocation = document.querySelector("#location");
                                const inputUbicacion = document.getElementById("ubicacion");
                                inputLocation.value == "" ? inputUbicacion.value = "": "";
                               
                                props.fun();
                            }} 
                            className="BotonBuscar"><i className="fa-solid fa-magnifying-glass"></i>Search</button>
                    </div>
                </div>
                <div className="contenedorDeFiltracionDatos">
                    <div className="divCity-seleccion-location">
                        <div id="div-City" >
                            {
                                ciudades.map((el,i) =>{
                                    return(
                                        <p className="city-modal" key={i} onClick={()=>selecionarCiudad(el+", Finland")} ><i className="fa-solid fa-location-dot ubi"></i> {el+", Finland"}  </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                   
                    <div className="div-guests-modal">
                        <div className="operadores">
                            <h4>Adults</h4>
                            <p className="info-p-modal">Ages 13 or above</p>
                            <div className="buttonGuest">
                                <button onClick={() => cantidadGuest("-","adults")}>-</button>
                                <span>{adults}</span>
                                <button onClick={() => cantidadGuest("+","adults")}>+</button>
                            </div>
                        </div>

                        <div className="operadores">
                            <h4>Children</h4>
                            <p className="info-p-modal">Ages 2 - 12</p>
                            <div  className="buttonGuest">
                                <button onClick={() => cantidadGuest("-")}>-</button>
                                <span>{children}</span>
                                <button onClick={() => cantidadGuest("+")} >+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modals;