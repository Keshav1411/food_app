import React from 'react'
import classes from './Cart.module.css'
import Modal from '../Ui/Modal'
const Cart = (props) => {
    const cartItems =<ul className={classes['cart-items']}>{ [
        {id:'c1',name:"Sushi",amount:2,price:12.09},
    ].map((item) => <li>{item.name}</li>)
}</ul>
  return <Modal>
    {cartItems}
    <div className={classes.total}>
    <span>Total Ammount</span>
    <span>35.67</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
}

export default Cart