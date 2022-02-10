import { useState } from 'react';


export const useCounter = ( initialCounter = 10 ) => {    
    const [counter, setCounter] = useState(initialCounter);
    
    const increment = ()=>{
        setCounter (counter + 1 );
    }
    
    const decrement = () => {
        setCounter (counter - 1 );

    }

    const reset= () =>{
        setCounter(initialCounter);
    }
    //vamos a regresar el valor del state y las funciones para que se puedan llamar desde afuera
    return {
        counter, 
        increment, 
        decrement,
        reset
    }

};
