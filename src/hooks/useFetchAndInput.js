import { useEffect, useState } from "react"


export const useFetchAndInput = (valorInicial,url) => {

const [valor, setValor] = useState(valorInicial);
const [estado, setEstado] = useState({
    data:null,
    loading:true,
    hasError:false,
    error: null
});

useEffect(()=>{
obtenerDato();
},[url])

    const obtenerDato = async() =>{
      const resp = await fetch(url);

      if(!resp.ok){
        setEstado({
            data:null,
            loading:false,
            hasError:true,
            error: {
              estatus:resp.status,
              mensaje:'Error al cargar'
            }
        })
        return;
      }

      const info = await resp.json();

      setEstado({ //importante siempre devemos de devolver el estado cambiado y otorgandole los datos si se ejecuta bien
        data:info,
        loading:false,
        hasError:false,
        error: null
      })
      
      
    }


    const onInputCange = ({target}) =>{
        
         const {value, valueAsNumber} = target;
            console.log({value, valueAsNumber});

        setValor(valueAsNumber)
        console.log(valor);
    }

    const onBoton = () =>{
      if(!valor === ''){
        setValor(valor)
      }

    }

  return {
    valor,
    onInputCange,
    onBoton,
    data:estado.data,
    loading:estado.loading,
    hasError:estado.hasError,
    error:estado.error
  }
}


