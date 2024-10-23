

import { useFetchAndInput } from "./hooks/useFetchAndInput"


export const FetchWithInput = () => {

  //Tarea completar el Input que si hay un numero integre el valor en la URL 
  


   
   // eslint-disable-next-line no-unused-vars
   const {valor, onInputCange,data,loading,hasError,error,onBoton} = useFetchAndInput(0,`https://pokeapi.co/api/v2/pokemon/2`)
   

    
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

    <button className="btn btn-primary mt-3" onClick={onBoton()}>buscar</button>
    
    
    {
    loading
    ?
    <p className="text-primary mt-2 text-center display-1">Cargando...</p>
    :
    <p className="text-primary mt-2 text-center display-1">{error?.estatus} {error?.mensaje}</p>
    }
    
    <h2 className="text-primary mt-2 text-center display-1">{data?.name}</h2>


    </>

    
  )
}
