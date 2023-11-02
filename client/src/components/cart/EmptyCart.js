import { Typography, Box, styled } from '@mui/material';

const Component = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    width: 80%;
    height: 80vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    margin:auto auto;
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '30%'
});


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;