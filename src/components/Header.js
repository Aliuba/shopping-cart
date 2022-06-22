import {Badge, Button, Container, FormControl, Nav, Navbar} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {IoIosCart} from "react-icons/io";
import {Link} from "react-router-dom";
import {CartState} from "../context/Context";
import {AiFillDelete} from "react-icons/ai";


const Header = () => {
    const {state: {cart}, dispatch, productDispatch} = CartState();
    return (
        <Navbar bg='dark' variant={'dark'} style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>Shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className={'search'}>
                    <FormControl
                        style={{width: 500}}
                        placeholder={'Search a product'}
                        className={'m-auto'}
                        onChange={(e)=>productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value
                        })}
                    />

                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <DropdownToggle variant="success">
                            <IoIosCart color="white" fontSize='25px'/>
                            <Badge>{cart.length}</Badge>
                        </DropdownToggle>

                        <DropdownMenu style={{minWidth: 270}}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((c) => <span className={"cartItem"} key={c.id}>
                                        <img src={c.image} alt={c.name} className={'cartItemImg'}/>
                                        <div className={"cartItemDetail"}>
                                            <span>{c.name}</span><br/>
                                            <span>${c.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete fontSize={'20px'} style={{cursor: "pointer"}} onClick={() =>
                                            dispatch({
                                                type: 'REMOVE_FROM_CART',
                                                payload: c
                                            })
                                        }/>
                                    </span>)}
                                    <Link to={'/cart'}>
                                        <Button style={{width: "95%", margin: "0 10px"}}>
                                            Go to Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (<span style={{padding: 10}}>Cart is empty</span>)}

                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default Header
