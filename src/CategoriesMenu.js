import React from 'react';
import {Link} from 'react-router-dom'

function CategoriesMenu(props) {
    let categories = [
        {name: "Diseño Gráfico", id:1, path:"Diseño%20Gráfico"},
        {name:"Artes Plásticas", id:3, path:"Artes%20Plásticas"},
        {name:"Moda y textiles", id:4, path:"Moda%20y%20textiles"},
        {name:"Artesanias", id:5, path:"Artesanias"},
        {name:"Arquitectura", id:6, path:"Arquitectura"},
        {name:"Ilustación", id:7, path:"Ilustación"}]
    
        return(
            categories.map((category)=>
            <div key={category.id}>
                <Link to={`/category/${category.path}`}>
                    <span className="categoryMenuItem">{category.name}</span>
                </Link>
            </div>)
        )
}

export default CategoriesMenu