import React from 'react';
import Item from './item';

export default function itemList(props) {
    const { products } = props;
    const alertProduct = (name) => alert(name);


    return (
        <div className="container ">
            <div className="conatiner d-flex justify-content-between shadow  mb-3 p-5">
            {products.map((product) => {
                return (
                    <div class="card" style={{width: "18rem"}}>
                        <img src={"./imageInPublic.jpg"} className="card-img-top"/>
                            <div class="card-body">
                            <Item product={product} alertProduct={alertProduct} />
                            </div>
                    </div>
                )
            })}
        </div>
        </div>
    );
}

