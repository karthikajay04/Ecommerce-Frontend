import React from 'react'
import { AddressCard } from '../AddressCard/AddressCard'
import { OrderTracker } from './OrderTracker'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20 text-left'>
        <div>
            <h1 className='font-bold text-lg py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        {[1,1,1,1,1].map((item)=><div className="p-4">
    {/* Main Card Container */}
    <div className="flex items-center justify-between rounded-md border p-5 shadow-xl">
        
        {/* Left Side: Product Details (takes up 50% of the width) */}
        <div className="w-6/12">
            <div className="flex items-center">
                <img 
                    className="h-20 w-20 rounded-md object-cover object-top" 
                    src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" 
                    alt="Men's Printed Shirt" 
                />
                <div className="ml-4 space-y-1">
                    <p className="font-semibold">Men Shirt Printed</p>
                    <p className="space-x-5 text-sm text-gray-600 font-semibold">
                        <span>Color: Blue</span>
                        <span>Size: M</span>
                    </p>
                    <p className="text-sm text-gray-600">Seller: linaria</p>
                    <p className="text-lg font-bold">$150</p>
                </div>
            </div>
        </div>

        {/* Right Side: Rate & Review Button */}
        <div>
            <div className="flex cursor-pointer items-center text-blue-600 hover:text-blue-800">
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="mr-2"/>
                <span className="font-semibold">Rate & Review Product</span>
            </div>
        </div>

    </div>
</div>)}
    </div>

  )
}
