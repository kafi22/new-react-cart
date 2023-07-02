import React from 'react'

import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
import { useCustomHooks } from './Context';

const Cartitem = (props) => {

  const {id, title, price, img, amount} = props;

 const {removeItem, increaseBtn, decreaseBtn} = useCustomHooks()

  return (
  
      <article key={id} className=' flex justify-between items-center'>
        <img src={img} alt=""  className=' h-16 w-16 object-cover block'/>
        <div>
          <h4>{price} $</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
        <div className=' flex flex-col justify-center items-center'>
        <button onClick={() => increaseBtn(id)}>
        <BiChevronUp size={20} />
        </button>

          <p>{amount}</p>

        <button onClick={() => decreaseBtn(id)}>
          <BiChevronDown size={20} />
        </button>
        </div>
      </article>
    
  )
}

export default Cartitem