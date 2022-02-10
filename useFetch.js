import React, { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    // se usa para asegurarnos que solo se corra cuando este montado el componente
    const isMounted = useRef(true);

    useEffect(() => {
      return () => {
        isMounted.current=false
      };
    }, []);
    

    useEffect(() => {
        //para inicializarlo por default
        setState({
            data: null,
            loading: true,
            error: null
        });

      fetch(url)
        .then( resp => resp.json())
        .then (data => {
            setTimeout(() => {
                if( isMounted.current){
                    setState({
                        data,
                        loading:false,
                        error:null
                    });
                }
            }, 4000);

            

        })
        .catch ( () =>{
            setState( {
                data: null,
                loading: false,
                error: 'No se pudo cargar la info'
            } );
        } )
      
    }, [url]);
    
    return state;
};
