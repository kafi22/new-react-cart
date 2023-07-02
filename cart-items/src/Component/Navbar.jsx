import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useCustomHooks } from './Context';

const Navbar = () => {

 const {totalAmount} = useCustomHooks()
  return (
    <div  className=' bg-blue-300'>
      <nav className=' container mx-auto h-14  p-2 flex justify-between items-center'>
        <a href="" className=' text-white'>
          <h3>User-reducer</h3>
        </a>

        <button>
          <AiOutlineShoppingCart size={25} className=' text-white' />
          <span>{totalAmount}</span>
        </button>
      </nav>

    </div>
  )
}

export default Navbar