import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: '8',
    icono: 'fa-shopping-cart'
}

/* <!-- Total Categorías --> */

let totalCategories = {
    title:' Total de categorías', 
    color:'success', 
    cuantity: '6',
    icono:'fa-users'
}

/* <!-- Cantidad de Usuarios --> */

let totalUsers = {
    title:'Total de usuarios' ,
    color:'warning',
    cuantity:'20',
    icono:'fa-list'
}

let cartProps = [productsInDB, totalCategories, totalUsers];

function kpis(){
    return (
    
        <div className="row">
            
            {cartProps.map( (cartProps, index) => {

                return <SmallCard {...cartProps} key={index}/>
            
            })}

        </div>
    )
}

export default kpis;