import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Name: 'BÁLSAMO LABIAL DE CACAO',
        Description: 'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes',
        Cantidad: '10',
        Categories: ['Rotro Y Cuerpo'],
        Price: 170
    },
    {
        Name: 'EXFOLIANTE FACIAL DE CAFÉ Y AZÚCAR',
        Description: 'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet',
        Cantidad: '33',
        Categories: ['Rotro Y Cuerpo'],
        Price: 320
    },
    
]


function Categories (){
    return (
        /* <!-- Table of PRoducts --> */
        <div className="card shadow mb-4">
            <div className="card-body">
            <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Listado de Productos</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Categories;