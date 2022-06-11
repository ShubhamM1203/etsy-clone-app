import React from 'react';
import SmartAddButton from './AddToCartButton'
import { NavLink } from 'react-router-dom';

let ProductPost = (props) =>
  <li className='product-post'>
    <NavLink to={`/product/${props.product.id}`}><h1 className='product-title'>{props.product.title}</h1></NavLink>
    <img 
    alt={props.product.title} 
    className='post-image' 
    src={props.product.imageURL}>
    </img>
    <p className='post-description'>{props.product.description}</p>
    <p className='product-price'>Cost: ${props.product.price}</p>
    <SmartAddButton product={props.product} />
  </li>

export default ProductPost;