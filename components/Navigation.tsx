import React, { useState } from 'react'
import{Box, Button, Typography} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Cart from './Cart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const Navigation = () => {
    const [viewCart, setviewCart] = useState(false);
  return (
    <Box sx={{display: "flex", justifyContent:"space-between"}}>
      <Box sx={{display: "flex"}}>
        <Typography sx={{marginRight: "1rem", marginLeft: "1"}}>Collections</Typography>
        <Typography sx={{marginRight: "1rem"}}>Men</Typography>
        <Typography sx={{marginRight: "1rem"}}>Women</Typography>
        <Typography sx={{marginRight: "1rem"}}>About </Typography>
        <Typography sx={{marginRight: "1rem"}}>Contact</Typography>
      </Box>
      <Box sx={{display: "flex", alignItems:"center"}}>
       <Button onClick={() => setviewCart(!viewCart)}>
       <ShoppingCartIcon sx={{marginRight: "1rem"}}/>
       </Button> 
      <AccountCircleIcon color="primary" />
      </Box>
      {viewCart ? <Cart/> : null}
    </Box>
  )
}

export default Navigation
