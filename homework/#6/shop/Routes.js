import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import AnimatedSwitchMain from "./AnimatedSwitch"
import CounterIcon from "./components/CounterIcon/CounterIcon";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/products";

export default function Routes() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <Container>
            <Router>
                <Header floated='left'>
                    <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
                </Header>
                <Header floated='right'>
                    <NavLink to='/cart' style={{color: "black"}}>
                        <CounterIcon />
                    </NavLink>
                </Header>
                <br/>
                <Menu style={{width: "100%"}}>
                    <NavLink to='/' exact className='item' activeClassName='active-nav'>Home</NavLink>
                    <NavLink to='/products' exact className='item' activeClassName='active-nav'>Products</NavLink>
                    <NavLink to='/cart' className='item' activeClassName='active-nav'>
                        Cart
                    </NavLink>
                </Menu>
                <AnimatedSwitchMain />
            </Router>
        </Container>
    )
}
