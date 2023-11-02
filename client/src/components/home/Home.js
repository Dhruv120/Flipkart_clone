import React, { Fragment ,useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Slideee from './Slideee'
import {Box ,styled} from '@mui/material'
import Midslide from './Midslide'
import MidSection from './MidSection'


import { useSelector, useDispatch } from 'react-redux'; // hooks
import {getProducts} from '../../redux/actions/productAction'

const Component = styled(Box)`
  padding:10px;
  background:#f2f2f2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts);
 
  // console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])




  return (
    <Box>
        <NavBar/>
        <Component >
          <Banner/>
          <Midslide products={products} title='Deal of the day' timer={true}/>
          <MidSection/>
          <Slideee products={products} title='Discount for you' timer={false}/>
          <Slideee products={products} title='Suggesting items' timer={false}/>
          <Slideee products={products} title='Bumper offer' timer={false}/>
          <Slideee products={products} title='Trending offers' timer={false}/>
          <Slideee products={products} title='Summer super offer' timer={false}/>
          <Slideee products={products} title='Daily needs' timer={false}/>




        </Component>
        
    </Box>

  )
}

export default Home 