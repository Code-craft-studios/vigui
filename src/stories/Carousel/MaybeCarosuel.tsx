'use client'
import { Box } from '@mui/material'

import Carousel from 'react-material-ui-carousel'

const content = Array
  .from({length: 3})
  .map((_, index)=>(<div key={index + 1}>Children {index}</div>))

export const CustomCarousel = ()=> (
    <Box component='section' sx={{textAlign: 'center'}}>
      <Carousel sx={{display: {
      md: 'none'
    }}} >
        {content}
      </Carousel>
      <Box sx={{display: {
        md: 'flex',
        xs: 'none'
      }}}>
        {content}
      </Box>
    </Box>
)
