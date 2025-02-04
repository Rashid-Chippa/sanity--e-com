'use client'

import React, { useEffect, useState } from 'react'
import { Chef } from '../../../types/chefs'
//import { get } from 'http';
import { getCartItems, removeFromCart, upDateCartQuantity} from '../actions/actions'
//import Swal from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState<Chef[]>([])

  useEffect(()=> {
    setCartItems(getCartItems())
  },[])

//   const handleRemove = (id : string) =>{
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//      }) .then((result) => {
//         if (result.isConfirmed) {
//             removeFromCart(id)
//             setCartItems(getCartItems())
            
//             Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//             )
//         }
//     })
//   }
    
//   const handleQuantityChage =(id:string, quantity:number)=> {
//     upDateCartQuantity(id, quantity);
//     setCartItems(getCartItems())
//   }
//   const handleIncrement =(id:string) =>{
//     const name = cartItems.find((item) => item._id === id);
//     if(name){
//         handleQuantityChage(id, name.experience + 1)
//     }
//   }
//   const handleDecrement =(id:string) =>{
//     const name = cartItems.find((item) => item._id === id);
//     if(name && name.experience >  1){
//         handleQuantityChage(id, name.experience - 1)
//     }
//   }
//   const calculatedTotal =() =>{
//     return cartItems.reduce((total, item) => total + item.experience * item.experience, 0)
  
//   }

// const handleCheckout = () =>{
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//  }) .then((result) => {
//     if (result.isConfirmed) {
//         Swal.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//         )
//         setCartItems([])
//     }
// })
// }
 
  return (
    <div>
        <div>
            {cartItems.map((item) => (
                <div key={item.name}>
                    <h1>{item.experience}</h1>
                    <p>{item.description}</p>
                    <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
)}
                </div>
                </div>
            )) }
        </div>
    </div>
  )
}

export default CartPage