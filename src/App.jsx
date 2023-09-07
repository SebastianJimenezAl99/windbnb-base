import { useEffect, useState } from "react";
import "./App.css";
import CardData from "./components/cardData/CardData";
import logo from "./img/logo.png"


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [json, setJson] = useState([]);


  function filtrar(ciudad,huesped){
    let dataOriginal = json;
    
    if (ciudad) {
      if (huesped) {
        setData(dataOriginal.filter(el=> el.city == ciudad && el.maxGuests >= huesped))
      }else{
        setData(dataOriginal.filter(el=> el.maxGuests >= huesped))
      }
    }else{
      if (huesped) {
        setData(dataOriginal.filter(el=> el.maxGuests >= huesped))
      }else{
        setData(dataOriginal);
      }
    }
    
  }

  function actualizarVista() {
    const guest = document.querySelector("#guest");
    const ubicacion = document.querySelector("#ubicacion");
    let ciudad = ubicacion.value
    if (isNaN(ciudad.charAt(0))) {
      ciudad = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);
    }
   
    filtrar(ciudad,guest.value);
    ubicacion.value = ciudad;
  }

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
      setJson(resJson);
    } catch (error) {
      console.log("Error de try catch: "+error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
 

  return (
    <div className="contenedor-principal">
       <nav className="navegacion">
        <img className="logo-principal" src={logo} />
        <div className="inputs-busquedad">
          <input type="text" className="input-busqueda" id="ubicacion" placeholder="Ubicacion"/>
          <input type="text" className="input-busqueda" id="guest" placeholder="Add guest" />
          <i className="fa-solid fa-magnifying-glass logo" onClick={actualizarVista}></i>
        </div>  
       </nav>
       <div className="contenedor-secundario">
        <h2 className="titulo-principal">Stays in Finland</h2>
        <div className="contenedorDeCard">
          {data.map((el, i) => {
            return (
              <CardData 
              key={i}
              photo={el.photo}
              superhost={el.superHost}
              type={el.type}
              beds={el.beds}
              rating={el.rating}
              title={el.title}
              />
            );
          })}
          
        </div>
       </div>
    </div>
  );
}

export default App;
