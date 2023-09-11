import { useEffect, useState } from "react";
import "./App.css";
import CardData from "./components/cardData/CardData";

import Navs from "./components/nav/Navs";



function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [json, setJson] = useState([]);
  const [cantidad , setCantidad] =useState(0);
  


  function filtrar(ciudad,huesped){
    let dataOriginal = json;
    let dataResultante;
    
    if (ciudad) {
      if (huesped) {
        dataResultante = dataOriginal.filter(el=> el.city == ciudad && el.maxGuests >= huesped);
        setData(dataResultante)
      }else{
        dataResultante = dataOriginal.filter(el=> el.city == ciudad)
        setData(dataResultante)
      }
    }else{
      if (huesped) {
        dataResultante = dataOriginal.filter(el=> el.maxGuests >= huesped)
        setData(dataResultante)
      }else{
        dataResultante = dataOriginal
        setData(dataResultante);
      }
    }
    
    setCantidad(dataResultante.length);
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
     setCantidad(json.length);
  }, []);

  // Puedes ver la variable data en consola.
 

  return (
    <div className="contenedor-principal">
      <Navs data={json} fun={filtrar}/>
       <div className="contenedor-secundario">
        <div className="divTitulo">
          <h2 className="titulo-principal">Stays in Finland</h2>
          <span>{cantidad > 12 ? "12+ stays": cantidad+" stays"}</span>
        </div>
       
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
