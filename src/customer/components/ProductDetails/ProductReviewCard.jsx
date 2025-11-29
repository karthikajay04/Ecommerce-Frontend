import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Rating from '@mui/material/Rating'

export const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white'sx={{width:56,height:56,bgcolor:"#9155fc"}}>R</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2 text-gray-900 '>
                    <div>
                        <p className='font-semibold text-lg'>Raam</p>
                        <p className='opacity-70'>April 5,2025</p>
                    </div>
                <Rating value={4.5} name='half-rating' precision={0.5} readOnly />
            <p >Lorem ipsum dolor sit amet</p>
                </div>
                
            </Grid>
        </Grid>
    </div>
  )
}
