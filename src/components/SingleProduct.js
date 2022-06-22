import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import './styles.css'
import {CartState} from "../context/Context";



const SingleProduct=({prod})=> {


const {state:{cart}, dispatch}=CartState();


        return (
            <div className={'products'}>
                <Card>
                    <Card.Img src={prod.image} alt={prod.name}/>
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Subtitle style={{paddingBottom: 10}}>
                            <span>${prod.price.split(".")[0]}</span>
                            <div>in Stock: {prod.inStock}</div>
                        </Card.Subtitle>
                        {cart.some(p=>p.id==prod.id)?(<Button onClick={()=>{
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: prod

                            })
                        } }   variant={'danger'}>
                            Remove from card
                        </Button>):(<Button onClick={()=>{
                            dispatch({
                                type: 'ADD_TO_CART',
                                payload: prod
                            })
                        }} disabled={prod.inStock == 0}>
                            {prod.inStock == 0 ? 'Out of stock ' : "Add to card "}

                        </Button>)}



                    </Card.Body>
                </Card>
            </div>
        );

}

export default SingleProduct;