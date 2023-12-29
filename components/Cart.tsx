import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'
import { RootState } from '../store/store'
import { useSelector, useDispatch} from "react-redux"
import { removeFromCart } from '../store/cartSlice'

const Cart = () => {
   
    const count = useSelector ((state: RootState) => 
    state.cart.itemCount);
    const dispatch = useDispatch();

  return (
    <Box  sx={{
        zIndex: 5,
        position: "absolute",
        right: 50,
        backgroundColor: "#FFF",
        boxShadow: "0px 5px 10px lightgray",
        borderRadius: "0.5rem",
        paddingBottom: "2rem",
      }}
    >
      <Typography sx={{margin: "1rem auto" }}> 
        Cart
      </Typography>
      <Divider/>
     {count === 0 ? <Typography>Your cart is empty</Typography>  : 
     <>
     <Box sx={{display: 'flex', margin: "1rem"}}>
      <Image src="/assets/image_2.jpg" 
      width={40} 
      height={40}
      alt = "sneakers"
      style={{borderRadius: "1rem", marginRight: "1rem"}}
      />
      <Box>
        <Typography>
            Limited Edition Sneakers
        </Typography>
        <Typography>
          Ksh 3000 x {count} {""}
          <span style={{fontWeight: 800}}>
          {count * 3000} 
          </span>  
        </Typography>
      </Box>
      <Button onClick = {() => dispatch(removeFromCart())}>
      <DeleteIcon/>
      </Button>
      </Box>
      <Button sx={{
        backgroundColor: "pink",
        color: "white",
        padding: "0.5rem 2rem",
        fontWeight: "800",
        width: "100%",
    }}>
        Checkout
      </Button>
      </>}
    </Box>
  )
}

export default Cart
