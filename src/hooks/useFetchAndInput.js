import { useEffect, useState } from "react"


export const useFetchAndInput = (valorInicial) => { //Creamos nuestro CustomHook => useFetchAndInput, pasandole el valor del input 

const [valor, setValor] = useState(valorInicial);// valorInicial del Input entra a nuestro useState
const [estado, setEstado] = useState({// Mandamos un objeto donde almacenaremos los datos de la API 
    data:null,
    loading:true,
    hasError:false,
    error: null
});

useEffect(()=>{//UseEffect  se ejecutara solo una vez al renderizar 
obtenerDato(valor);// funcion la cual obtendra el valor en el parametro el valor Inicial ya que sino causa error al no otorgarle un parametro valor inicial
},[])


    const obtenerDato = async(valorInput) =>{ // funcion asincrona donde tendra la API 
      const url = `https://pokeapi.co/api/v2/pokemon/${valorInput}`;
      const resp = await fetch(url); // Espera la respuesta de la url

      if(!resp.ok){//si el estado no es correcto 200 manda objeto 
        setEstado({
            data:null,
            loading:false,
            hasError:true,
            error: {// mensaje de error 
              estatus:resp.status,
              mensaje:'Error al cargar'
            }
        })
        return;
      }

      const info = await resp.json(); // espera la respuesta convertida en json 

      setEstado({ //importante siempre devemos de devolver el estado cambiado y otorgandole los datos si se ejecuta bien
        data:info,
        loading:false,
        hasError:false,
        error: null
      })
      
      
    }


    const onInputCange = ({target}) =>{ // funcion que desestructura el evento => para que el valor del input se integre 
        
         const {value, valueAsNumber} = target; //desetructuracion  
            console.log({value, valueAsNumber});

        setValor(value) // useState renderiza el valor otorgado por el Input 
        console.log(valor);
    }


  return { //enviamos nuestras funciones y parametros del objeto para consumir nustro CustomHook
    valor,
    onInputCange,
    obtenerDato,
    data:estado.data,
    loading:estado.loading,
    hasError:estado.hasError,
    error:estado.error
  }
}


