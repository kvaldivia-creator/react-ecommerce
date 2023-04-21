import React, { useContext, useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import AppContext from '../context/AppContext';

const ProductList = () => {

  const { state: { products }} = useContext(AppContext)
  
	return (
		<section className="main-container">
			<div className="ProductList">
        {
          products.map(product => (
            <ProductItem product={product} key={product.id}/>
          ))
        }
			</div>
		</section>
	);
}

export default ProductList;
