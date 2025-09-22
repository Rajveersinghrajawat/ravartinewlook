"use client"
import React, { useState } from 'react'
import Header from "../common/Header"
import { RiDeleteBin6Line } from "react-icons/ri";

import Footer from "../common/Footer"

const NEWARRIVALS = [
  { id: 1, heading: "GULABBAAH POSHAK", image: "/images/image.png", title: "Natural crep poshak with intricate thread embroidery and traditional patterns", price: "5,999", delprice: "7,999" },
  { id: 2, heading: "FULBAHAR POSHAK", image: "/images/image1.png", title: "Thread embroidery with zari and sequence work, perfect for special occasions", price: "3,800", delprice: "4,500" },
  { id: 3, heading: "ROYAL MAROON POSHAK", image: "/images/image3.png", title: "Traditional royal maroon poshak with golden thread work and mirror embellishments", price: "4,200", delprice: "5,200" }
]

export default function Cart() {
    const [qty, setQty] = useState(1);
  return (
    <>


      <div className='text-center customfont md:text-4xl text-2xl font-extrabold py-[15px] text-[#2c2122] lg:py-[30px] border-y border-gray-200'>
        <h1>Cart Page</h1>
      </div>

      <div className='container lg:px-[40px] px-[20px]  mx-auto '>
        <div className="py-[40px]">

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700 text-sm sm:text-base">
                  <th className="p-3 border-b-2 border-[#c37b43]">Delete</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Image</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Product</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Price</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Quantity</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">

                  <td className="p-3 text-center">
                    <button className="text-[#c37b43] hover:text-red-700">
                      <RiDeleteBin6Line className='text-2xl' />
                    </button>
                  </td>

                  <td className="p-3 text-center">
                    <img src="demo.png"
                      alt=""
                      className="w-12 h-12 object-cover rounded" />
                  </td>

                  <td className="p-3">Caroline Study Tables</td>

                  <td className="p-3 font-medium text-gray-700">Rs. 2,500</td>

                  <td className="p-3 py-[20px] flex items-center gap-2">
                    <form action="">
                      <label htmlFor="qty" className="sr-only">Quantity</label>
                      <input 
                        type="number"
                        value={qty}
                        min="1"
                        className="w-16 border rounded-md text-center" />
                    </form>
                  </td>
                  <td className="p-3 font-medium text-gray-700">Rs. 2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <div className='container lg:px-[40px] px-[20px] mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border border-gray-200 rounded-lg shadow-sm">

            <div className="bg-gradient-to-r to-[#e77240] from-[#d53f3d]  text-white font-semibold  text-xl p-3 rounded-t-lg">
              COUPON
            </div>

            <div className="p-4">
              <p className="text-gray-700 mb-3">Enter your coupon code if you have one.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 border rounded-md px-3 py-2 "
                />
                <button className="bg-gradient-to-r to-[#e77240] from-[#d53f3d] cursor-pointer text-white text-xl  px-5 py-2 hover:text-[#eebd2b] -md h">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>


          <div className="border border-gray-200 rounded-lg shadow-sm">

            <div className="bg-gradient-to-r to-[#e77240] from-[#d53f3d] text-white font-semibold p-3 text-xl rounded-t-lg">
              CART TOTALS
            </div>

            <div className="p-4 space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal</span>
                <span>Rs. 2,500</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Discount (-)</span>
                <span>Rs. 0</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs. 2,500</span>
              </div>
              <button className="w-full bg-gradient-to-r to-[#e77240] from-[#d53f3d] hover:text-[#eebd2b] text-xl text-white py-3 rounded-md font-semibold hover:opacity-90">
                Proceed To Checkout
              </button>
            </div>
          </div>

        </div>
      </div>

</>


  )
}
