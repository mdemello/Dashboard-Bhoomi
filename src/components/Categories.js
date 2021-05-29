import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Name: 'BÁLSAMO LABIAL DE CACAO',
        Description: 'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes',
        Cantidad: '10',
        Categories: ['Cuidado Facial'],
        Price: 170
    },
    {
        Name: 'EXFOLIANTE FACIAL DE CAFÉ Y AZÚCAR',
        Description: 'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus',
        Cantidad: '2',
        Categories: ['Cuidado Facial'],
        Price: 210
    },
    {
        Name: 'JABÓN CORPORAL DE ROSA MOSQUETA',
        Description: 'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet',
        Cantidad: '33',
        Categories: ['Cuidado Corporal'],
        Price: 320
    },
    {
        Name: 'SHAMPOO SÓLIDO FORTALECEDOR DE ORTIGA Y ROMERO',
        Description: 'ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis',
        Cantidad: '82',
        Categories: ['Cuidado Capilar'],
        Price: 400
    },
    {
        Name: 'BÁLSAMO LABIAL DE CAFÉ',
        Description: 'consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
        Cantidad: '52',
        Categories: ['Cuidado Facial'],
        Price: 180
    },
    {
        Name: 'EXFOLIANTE CORPORAL DE LIMÓN Y ROMERO',
        Description: 'at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel',
        Cantidad: '4',
        Categories: ['Sale'],
        Price: 290
    },
    {
        Name: 'JABÓN DETOX DE OLIVA Y CARBÓN',
        Description: 'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
        Cantidad: '71',
        Categories: ['Cuidado Corporal'],
        Price: 230
    },
    {
        Name: 'SHAMPOO SÓLIDO REPARADOR KARITÉ',
        Description: 'sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede',
        Cantidad: '42',
        Categories: ['Cuidado Capilar'],
        Price: 210
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