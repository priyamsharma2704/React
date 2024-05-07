import {useState} from "react";
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Cart() {

    const [cartItems, setCartItems] = useState(0);

    const handleCartItems = (newItem) =>
    {
        console.log(newItem)
        setCartItems(prevCartItem => prevCartItem + newItem);
    }
    
  return (
    <>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartItems} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <button onClick={()=>handleCartItems(1)}></button>
    </>
  );
}

export default Cart;
