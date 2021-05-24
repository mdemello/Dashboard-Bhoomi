import React from 'react';
import LastProduct from './LastProduct';
import CategoriesInDb from './CategoriesInDb';
import Categories from './Categories';


function ContentRowCenter(){
    return (
        <div className="row">
            <LastProduct />
            <CategoriesInDb />
            <Categories />

        </div>
    )
}

export default ContentRowCenter;
