import React, { useContext } from 'react';
import '../styles/OrderItem.scss';

import iconCloseImage from '@icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = ({ order }) => {

  const { removeFromCart } = useContext(AppContext)

  const handleDelete = (order) => {
    removeFromCart(order)
  }

	return (
		<div className="OrderItem">
			<figure>
				<img src={order.images[0]} alt={order.title} />
			</figure>
			<p>{order.title}</p>
			<p>${order.price}</p>
			<img  onClick={() => handleDelete(order)}
            src={iconCloseImage}
            className='icon-close'
            alt="close" />
		</div>
	);
}

export default OrderItem;
