import React, {Component} from 'react';

import Products from './Products';



class CategoriesInDb extends Component{
    constructor(){
        super()
        this.state ={
            categoriesList : []
        }
    }

    componentDidMount(){
        fetch('/categories')
        .then(respuesta =>{
			
            return respuesta.json();
        })
        .then(categories =>{
			
            this.setState({categoriesList: categories.data})
        })
        .catch(error => console.log(error))
    }

    render(){
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-dark">Categorías de Productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.categoriesList.map((products,index)=>{
                                        return  <Products  {...products}  key={index}  />
                                    })
									
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
     
    )
    }   
}
export default CategoriesInDb;