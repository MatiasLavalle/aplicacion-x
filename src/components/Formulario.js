import React from 'react';
import useSelect from './../hooks/useSelect';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css'


export const Formulario = ({guardarCategoriaProp}) => {
    
    const OPCIONES = [
        {value: 'general', label: "General"},
        {value: 'business', label: "Negocios"},
        {value: 'entertainment', label: "Entretenimiento"},
        {value: 'health', label: "Salud"},
        {value: 'science', label: "Ciencia"},
        {value: 'sports', label: "Deportes"},
        {value: 'technology', label: "Tecnologia"},
    ]
    
    const [categoria,SelectNoticias] = useSelect('general', OPCIONES)

    const buscarNoticias =(e)=>{
        e.preventDefault();
        guardarCategoriaProp(categoria)


    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={`${styles.heading}`}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input type="submit" value="buscar" className={`${styles.['btn-block']} btn-large amber darken-2`}/>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Formulario

Formulario.propType = {
    guardarCategoriaProp: PropTypes.func.isRequired
}