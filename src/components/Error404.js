import React from 'react';
import imagen from '../assets/img/paginanoencontrada.jpg';

function Error404(){
    return(
        <React.Fragment>
          <section> 
            <h1 className='text-center'>Error404</h1>
            <h2 className='text-center'>Página no encontrada</h2>
            <figure>
                <img className='w-100'src={imagen} alt="Página no encontrada"/>
            </figure>
        </section>   

        </React.Fragment>
    )
}

export default Error404;