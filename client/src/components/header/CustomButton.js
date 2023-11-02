import React , {useState ,useContext} from 'react'
import {Box , Button ,Typography ,styled,Badge} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import {DataContext} from '../../context/DataProvider';
import Profile from './Profile';
import LoginDialog from '../login/LoginDialog';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 0 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: 40,

        fontSize: 16,
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Container = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    color:'inherit',
    display: 'flex',
    marginLeft:90,
    cursor:'pointer',

    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)`
    
    color:#2874f0;
    background:#ffffff;
    text-transform:none;
    padding:5px 40px;
    border-radius: 4px;
    box-shadow:none;
    font-weight: bold;
    height:32px;
`

const CustomButton = () => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const [open, setopen] = useState(false)

    const {account,setAccount} = useContext(DataContext)

    const openDialog = () =>{
        setopen(true);
    }

  return (
   <Wrapper>    

        {
            account ? <Profile account={account} setAccount={setAccount} />
            :<LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
        }
    
{/*
        <Typography style={{ marginTop: 3, width: 135 ,fontWeight:'bold'}}>Become a Seller</Typography>
        <Typography style={{ marginTop: 3 , fontWeight:'bold'}}>More</Typography>
    */}
        <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color="secondary">
                 <ShoppingCart />
        </Badge>
            <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setopen={setopen}/>
   </Wrapper>
  )
}

export default CustomButton