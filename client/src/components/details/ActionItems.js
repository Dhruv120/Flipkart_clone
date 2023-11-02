import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';



const LeftContainer = styled(Box)(({ theme }) => ({
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
//    alignItems:'center',
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))



const Image = styled('img')({
    
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '90%',
    marginBottom:'15px',
   
});

const StyledButton = styled(Button)`
    width:48%;
    border-radius: 2px;
    height: 40px;
    color: #FFF;
`;


const ActionItems = ({product}) => {

    const navigate = useNavigate();
    const { id } = product;

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity)); // values will be set in redux then navigated to cart 
        navigate('/cart');
    }

  return (
    <LeftContainer>
        <Box>  <Image sx={{ border: 3, borderRadius: '16px' }} src={product.detailUrl} /></Box>
      
        <Box>
            <StyledButton onClick={() => addItemToCart()}  style={{marginRight: 10, background: '#ff9f00'}} variant="contained" ><Cart />Add to Cart</StyledButton>
            <StyledButton  style={{background: '#fb641b'}} variant="contained"> <Flash /> Buy Now</StyledButton>
        </Box>
       
    </LeftContainer>
  )
}

export default ActionItems