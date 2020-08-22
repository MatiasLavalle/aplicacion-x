import React from 'react';

import {Noticia} from './Noticia'

export const ListadoNoticias = ({noticiasProp}) => {
    return (
        <div className="row">
            {noticiasProp.map( (noticia)=>(
                <Noticia 
                        key={noticia.url} 
                        noticiaProp={noticia}
                />
            )
        )}
            
            
        </div>
  
    )
}

