import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { Box, Button, Typography } from '@mui/material'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';


const AddToCart = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
  
  return (
    <Box sx={{marginLeft: "2rem", display: "flex", justifyContent: "space-between"}}>
        <Box sx={{backgroundColor: "lightgrey", borderRadius: "1rem", display: "flex", alignItems: "center"}}>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <Typography sx={{fontWeight: 800}}>{count}</Typography>
            <Button onClick={() => setCount(count + 1)}>+</Button>
    
        </Box>
      <Box>
        <Button sx={{backgroundColor: "pink", color: "#FFF", 
         padding: "1rem 2rem"}}
         onClick={() => {dispatch (addToCart
          (count));
         setCount(0);
         }}>
            <ShoppingCart sx={{marginLeft: "1rem"}}/> Add to Cart
        </Button>
      </Box>
    </Box>
  )
}

export default AddToCart
