
import React from 'react'
import Grid from '@mui/material/Grid'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

export const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
        <div className="flex justify-between items-center p-4  rounded-md">
    {/* Left Section: Product Details */}
    <div className="w-6/12">
        <div className='flex items-center cursor-pointer'>
            <img 
                className='w-20 h-20 object-cover object-top rounded-md' 
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" 
                alt="Men's Printed Shirt" 
            />
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Men Shirt Printed</p>
                <p className='opacity-70 text-sm'>Size: M</p>
                <p className='opacity-70 text-sm'>Color: Blue</p>
            </div>
        </div>
    </div>

    {/* Middle Section: Price */}
    <div className="w-2/12">
        <p className='font-semibold'>$150</p>
    </div>

    {/* Right Section: Delivery Status */}
    <div className="w-4/12">
    {true && (
        <div className="flex items-start">
            {/* Icon as the first flex item */}
            <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 mt-1'/>
            
            {/* Text block as the second flex item */}
            <div>
                <p className="text-sm font-semibold">
                    Delivered On March 03
                </p>
                <p className='text-xs opacity-70'>
                    Your Item Has Been Delivered
                </p>
            </div>
        </div>
    )}
    {false && (
        <p className="text-sm font-semibold">
            <span>Expected Delivery On March 03</span>
        </p>
    )}
</div>
</div>
    </div>
  )
}
