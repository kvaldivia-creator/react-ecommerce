import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';
import iconArrow from '@icons/flechita.svg'
const MyOrder = () => {
  const {state: {cart}} = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }


	return (
    <aside className='container-my_order'>
      <div className="my_order">
        <div className="title-container">
          <img src={iconArrow} alt="arrow" />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          {cart.map(order => (
            <OrderItem order={order} key={`orderItem-${order.id}`}/>
          ))}
          <div className='order-container'>
            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </aside>
	);
}

export default MyOrder;
