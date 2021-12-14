import './Store.page.css';
import React, { useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Services/http.service';
import { leerProducto } from '../../redux/actions/productos';
export default function Store() {
    const history = useHistory();
    const productos = useSelector(state => state).productos;
    const dispatch = useDispatch();

    const getProducts = useCallback(() => {
        if( !productos.length ){
            fetchProducts()
            .then( (data) => {
              dispatch( leerProducto(data) );
            })
            .catch( (error) => {
              console.trace('Error:',error)
            })
        };
      }, [productos,dispatch]);
    
      useEffect(() => {
        getProducts();
      }, [getProducts]);

    let abrirProducto = (product) => {
        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        history.push({
            pathname: '/product/' +product.id,
            state: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                category: product.category
            }
        })
    }

    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>
            <div className="wrapper">
                <h1>Lista de productos</h1>
                <ul className="product-list">
                    {productos && productos.map(product => (
                        <li className="product-element" key={product.id} onClick={() => abrirProducto(product)}>
                            <div className='img-container'>
                                <img src={product.image} alt='{product.title}'/>
                            </div>
                            <h3>{product.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}