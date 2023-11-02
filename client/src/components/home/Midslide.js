import { Box ,styled} from '@mui/material'
import React from 'react'
import Slideee from './Slideee'

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

const Component = styled(Box)`
    display: flex;
    
`

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '80%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '20%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));


const Midslide = ({products,title,timer}) => {
  return (
    <Component>
        <LeftComponent>
            <Slideee products={products} title={title} timer={timer}/>
        </LeftComponent>
        <RightComponent>
            <img src={adURL} style={{width: 220 }}/>
        </RightComponent>
    </Component>
  )
}

export default Midslide