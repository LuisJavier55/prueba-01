import { useState } from "react"


export const useFetchAndInput = (valorInicial) => {

const [valor, setValor] = useState(valorInicial);
const [estado, setEstado] = useState({
    data:null,
    loading:true,
    hasError:false,
    error: null
})

    const onInputCange = ({target}) =>{
        
         const {value, valueAsNumber} = target;
            console.log({value, valueAsNumber});

        setValor(valueAsNumber)
        console.log(valor);
     
    }

  return {
    ...valor,
    onInputCange
  }
}


