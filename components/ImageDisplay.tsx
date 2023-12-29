/* eslint-disable jsx-a11y/alt-text */
import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const ImageDisplay = () => {
  return (
    <Box> 
      <Image src="/assets/image_3.jpg" 
      width={500} 
      height={500}
      alt = "sneakers"
      style={{borderRadius: "1rem"}}
      />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Image 
      src="/assets/image_3.jpg" 
      width={80} 
      height={80}
      alt = "sneakers"
      style={{borderRadius: "1rem"}}
      />
       <Image 
      src="/assets/image_3.jpg" 
      width={80} 
      height={80}
      alt = "sneakers"
      style={{borderRadius: "1rem"}}
      />
       <Image 
      src="/assets/image_3.jpg" 
      width={80} 
      height={80}
      alt = "sneakers"
      style={{borderRadius: "1rem"}}
      />
       <Image 
      src="/assets/image_3.jpg" 
      width={80} 
      height={80}
      alt = "sneakers"
      style={{borderRadius: "1rem"}}
      />
        </Box>
    </Box>
  )
}

export default ImageDisplay
