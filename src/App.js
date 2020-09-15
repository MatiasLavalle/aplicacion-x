import React, { useState, useEffect } from 'react';
import {Header} from './components/Header'
import {ListadoNoticias} from './components/ListadoNoticias'
import Formulario from './components/Formulario'

function App() {
  
  const [noticias, setNoticias] = useState([])
  const [categoria, guardarCategoria]= useState('')
  
  
  useEffect( ()=>{
    const consultarAPI = async ()=>{
      // const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5da06b3546684d94a84e2eaa2c97b548`
      console.log(categoria)
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      //console.log(noticias.articles)
      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])
  
  return (
    <>
      <Header titulo="Noticias API"/>
      {/* Formulario de busqueda de noticias */}
      {/* Listado de noticias */}
      <Formulario guardarCategoriaProp={guardarCategoria} />
      <ListadoNoticias noticiasProp={noticias}/>



    </>
  );
}

export default App;

