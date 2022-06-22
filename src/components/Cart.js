import {CartState} from "../context/Context";
import { Button, Col, FormControl, Image, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

import {AiFillDelete} from "react-icons/ai";

const Cart = () => {
  const {state: {cart}, dispatch}=  CartState()
    const[total, setTotal]=useState()
    useEffect(()=>{
     setTotal(cart.reduce((acc, current)=>acc+Number(current.price)*current.qty, 0))
    }, [cart])
    return (
        <div className={'home'}>
            <div className={"productContainer"}>
<ListGroup>
    {cart.map((c)=>
        <ListGroup.Item key={c.id}>
            <Row>
                <Col md={2}>
                  <Image src={c.image} alt={c.name} fluid rounded/>
                </Col>
                <Col md={2}>
                  <span>{c.name}</span>
                </Col>
                <Col md={2}>
                    ${c.price.split(".")[0]}
                </Col>
                <Col md={2}>
                <FormControl as={'select'} value={c.qty} onChange={(e)=>dispatch({
                    type:'CHANGE_CART_QTY',
                    payload:{
                        id: c.id,
                        qty: e.target.value
                    }
                })}>
                    {[...Array(Number(c.inStock)).keys()].map(x=>
                    <option key={x+1}>{x+1}</option>)}

                </FormControl>
</Col>
                <Col mg={2}>
                    <AiFillDelete fontSize={'20px'} style={{cursor: "pointer"}} onClick={() =>
                                            dispatch({
                                                type: 'REMOVE_FROM_CART',
                                                payload: c
                                            })}/>
                </Col>
            </Row>
        </ListGroup.Item>)

        }
</ListGroup>
            </div>
            <div className={"filters summary"}>
<span className={"title"}> Subtotal ({cart.length}) items</span>
                <span style={{fontWeight:700, fontSize: 20}}> Total: ${total}</span>
                <Button type={"button"} disabled={cart.length===0}> Proceed to Checkout</Button>
            </div>
        </div>
    );
}
export default Cart
