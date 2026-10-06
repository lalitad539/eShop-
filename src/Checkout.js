import React from 'react'
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal.js"
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img src="https://m.media-amazon.com/images/G/31/img26/Prime/Acq/LU/Amazon-PD_TDR_Non_Prime_PC-Header_Annual.jpg" alt="" className='checkout_ad' />
        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />

      </div>
    </div>
  )
}

export default Checkout
