import { useState } from "react";


export const useForm = ( initialState={}) => {
  
    const [values, setValues] = useState(initialState);

    //limpia el input text
    const reset= ()=>{
        setValues(initialState);
    }
    const handleInputChange = (e) =>{
        const {target } = e;
        //console.log(target.name);
        //console.log(target.value);
        setValues({
            ...values,
            [target.name]: target.value
            
        })
    }

    return [values, handleInputChange, reset];
};
