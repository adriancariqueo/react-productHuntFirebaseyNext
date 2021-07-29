import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    const [valores, setValores] = useState(stateInicial);
    const [errores, setErrores] = useState({});
    const [submitForm, setsubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if (noErrores) {
                fn();
            }
            setsubmitForm(false);
        }

    }, [])

    //Funcion que valida cuando el usuario escribe algo
    const handleChange = e =>{
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errorValidaciones = validar(valores);
        setErrores(errorValidaciones);
        setsubmitForm(true);
    }

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange
    }
}

export default useValidacion;
