import React from 'react';

export const Item = ({ product, alertProduct }) => {
    return (
        <div>
            <h6>{product.name}</h6>
            <p>{product.description}</p>
            <h5>{product.price}</h5>
            <a href="#" class="btn btn-primary" onClick={() => alertProduct(product.name)}>Go somewhere</a>
        </div>
    )
}

export default Item;
// tant que tu n'exportes pas tu ne peux pas importation