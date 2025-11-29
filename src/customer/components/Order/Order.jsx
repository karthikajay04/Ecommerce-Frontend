import Grid from '@mui/material/Grid'
import React from 'react'
import { OrderCard } from './OrderCard'


const orderStatus=[
    {label:'On The Way',value:"on_the_way"},
    {label:'Delivered',value:"delivered"},
    {label:'Cancalled',value:"cancelled"},
    {label:'Returned',value:"returned"},
]


export const Order = () => {
  return (
    <div className=' px-5 lg:px-20'>
    <div className="flex gap-6 px-4 lg:px-8">
        {/* Left Section: Filter Sidebar */}
        <div className="w-1/4"> {/* Equivalent to 3/12 columns, a clean replacement for xs={2.5} */}
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5 rounded-md'>
                <h1 className='font-bold text-lg'>Filter</h1>
                <div className='space-y-4 mt-10'>
                    <h1 className='font-semibold'>ORDER STATUS</h1>
                    {orderStatus.map((option) => (
                        <div key={option.value} className='flex items-center'>
                            <input
                                id={option.value}
                                defaultValue={option.value}
                                type="checkbox"
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 rounded'
                            />
                            <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Section: Main Content */}
        <div className="w-3/4"> {/* Equivalent to 9/12 columns */}
        <div className='space-y-5'>
            {[1,1,1,1,1].map((item)=><OrderCard/>)}
        </div>
            
        </div>
    </div>
</div>
  )
}
