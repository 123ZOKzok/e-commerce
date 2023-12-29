import React from 'react'
import {Box, Typography} from '@mui/material'

const TextDisplay = () => {
  return (
    <Box sx={{marginLeft: "2rem"}}>
     <Typography sx={{textTransform:"uppercase", color: "pink"}}>Sneaker Company</Typography> 
     <Typography sx={{fontSize: "2.5rem", fontWeight: "700", margin: "2rem auto"}}>Limited Edition Sneakers</Typography> 
     <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Facere modi, nobis ea sint autem, quia qui vitae blanditiis 
         quidem sed vel eius repudiandae magnam consequatur numquam 
         dicta esse reiciendis! Porro?
    </Typography> 
     <Typography 
     sx={{ fontWeight: 800, 
     fontSize: "1.5rem", 
     margin: "1 rem auto" }}>Ksh 3000</Typography> 
     <Typography></Typography> 
    </Box>
  )
}

export default TextDisplay
