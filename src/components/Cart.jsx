import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addItem, removeItem } from '../redux/action/index';

const Cart = () => {
    const state = useSelector((state)=> state.CartReducer)
    const dispatch = useDispatch()

    const increaseQuantity = (product) => {
        dispatch(addItem(product))
    }
    const decreaseQuantity = (product) => {
        dispatch(removeItem(product))
    }

    const emptyCart = () => {
        return(
            <div className="my-5 bg-light">
                <div className="container py-4">
                    <div className="row">
                        <h3 style={{color:"red"}} className="text-center display-6">Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        return(
            <>
            <div className="my-5 bg-light">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-6 col-xs-12 text-center">
                            <h3 className="display-6">{product.title}</h3>
                            <h3>
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </h3>
                            <button className="btn btn-outline-dark me-4" onClick={()=>decreaseQuantity(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> increaseQuantity(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </div>
    );
}

export default Cart;
