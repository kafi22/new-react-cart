import React from 'react'
import { useCustomHooks } from './Context'
import Cartitem from './Cartitem';

const CartContainer = () => {

 const {state, clearAll, totalPrice} = useCustomHooks();
 const {cart} = state;

 const cartitem = Array.from(cart.entries())
 console.log(cartitem)

  const getAllitem = cartitem.map(items => {

    const [id, item] = items
   
    return (
      <Cartitem  key={id} {...item}   />
    )
  })

  if(cartitem.length === 0) {
    return <h1>Item has delete</h1>
  }

  return (
    <div className=' container mx-auto p-2'>
    <div className=' grid grid-cols-1 justify-between items-stretch'>
    {getAllitem}
    </div>
    <footer className='flex flex-col'>
    
    <hr />
     
        <div className=' flex justify-between items-center'>
          <h5 className='cart-total'>
            total <span>{totalPrice.toFixed(2)}$</span>
          </h5>
        <button className='  bg-blue-300 py-1 px-2' onClick={clearAll}>
          clear cart
        </button>
        </div>
    </footer>
    </div>
  )
}

export default CartContainer