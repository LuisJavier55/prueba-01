import { useFetchAndInput } from "./hooks/useFetchAndInput"


export const FetchWithInput = () => {

    const {numero, onInputCange} = useFetchAndInput(0)

  return (
    <>
    <h1>Reto buscar con input el pokemon </h1>

    <hr />

    <input 
        type="number"
        className="form-control mt-2" 
        placeholder="numero de pockemon"
        name="numero"
        value={numero}
        onChange={onInputCange}/>


    <button className="btn btn-primary mt-3">buscar</button>
    </>

    
  )
}
