import IconButton from '@mui/material/IconButton'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';

export default function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg-h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold text-left'>Men Printed Pure Cotton Straight Kurta</p>
                <p className='opacity-70 text-left'>Size:L,White</p>
                <p className='opacity-70 mt-2 text-left'> Seller:Majestic Man</p>
                <div className='flex items-center p-3 space-x-5 text-gray-900 '>
                    <p className='font-semibold '>₹1500</p>
                    <p className='line-through opacity-60'>₹999</p>
                    <p className='text-green-600 font-semibold'>50%</p>
                </div>

            </div>
            
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    
                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                </div>
            </div>
    </div>
  )
}
