

import { useFetchAndInput } from "./hooks/useFetchAndInput"


export const FetchWithInput = () => {

  //Tarea completar el Input que si hay un numero integre el valor en la URL 
 
   // eslint-disable-next-line no-unused-vars
   const {valor, onInputCange,data,loading,hasError,error,obtenerDato} = useFetchAndInput(1)// customHook de nuestros parametros y funciones, enviando nuestro valorInicial 
   
   const onBoton = ()=>{// funcion boton al precionar 
     obtenerDato(valor);// cuando se preciona el boton se envia de nuevo el 'valor' a la funcion ObtenerDato como parametro 
    }

    
  return (
    <>
    <h1>Reto buscar con input el pokemon </h1>

    <hr />

    <input 
        type="number"
        className="form-control mt-2" 
        placeholder='entra valor '
        name="numero"
        value={valor}
        onChange={onInputCange}/>

    <p>{valor}</p>
{/* boton donde el evento OnCliCK tiende a llamar la funcion y envia nuestro valor al renderizar */}
    <button className="btn btn-primary mt-3" onClick={onBoton}>buscar</button> 
    
    
    {
      //funcion cortocircuito si loading es verdadero envia un mensaje de cargar, sino lo es te manda un error por el consumo de nustra API
    loading
    ?
    <p className="text-primary mt-2 text-center display-1">Cargando...</p>
    :
    // mensajes llegando desde nuestro CustomHook objeto error tiene estatus?
    <p className="text-primary mt-2 text-center display-1">{error?.estatus} {error?.mensaje}</p>
    //                                                                       objeto error tiene mensaje ? verdad:mesaje  falso:undefined
    }
    
    <h2 className="text-primary mt-2 text-center display-1">{data?.name}</h2>


    </>

    
  )
}
