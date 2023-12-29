import React from 'react'
import ImageDisplay from './ImageDisplay'
import { Box } from '@mui/material'
import TextDisplay from './TextDisplay'
import AddToCart from './AddToCart'

const Product = () => {
  return (
    <Box sx={{padding: "2rem", display: "flex", justifyContent: "space-between"}}>
      <ImageDisplay/>
      <Box>
      <TextDisplay/>
      <AddToCart/>
      </Box>
    </Box>
  )
}

export default Product
