import {useItemStore} from "../Store/store.js";
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

function CartBadge() 
{
    const {cartItems} = useItemStore((state) => ({
        cartItems: state.cartItems
    }));

    const handleClick = () =>
    {
        console.log("clicked");
    }

    return (
        <>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartItems} color="secondary">
            <ShoppingCartIcon onClick={handleClick}/>
            </StyledBadge>
            
        </IconButton>
        </>
    );
}

export default CartBadge;
