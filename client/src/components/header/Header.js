
import { useState } from 'react';
import Search from './Search';


import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';


import CustomButton from './CustomButton';

const StyledHeader = styled(AppBar)`
  background:#2874f0;
  height:56px;
`

const Component = styled(Link)`
  margin-left:12%;
  line-height:0;
  color:inherit;
`

const SubHeading = styled(Typography)`
  font-size:10px;
  font-style:italic;
`
const PlusImg = styled('img')({
  width:10,
  height:10,
  marginLeft:4

})

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('sm')]: {
      display: 'none'
  }
}));


const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

const list = () => (
  <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
          <listItem button>
              <CustomButton />
          </listItem>
      </List>
  </Box>
);


  return (
   
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>

        <MenuButton
        color="inherit"
        onClick={handleOpen}
    >
        <Menu />
    </MenuButton>

        <Drawer open={open} onClose={handleClose}>
        {list()}
       </Drawer>


            <Component to='/' style={{textDecoration: 'none'}}>
                <img src={logoURL} alt="logo" style={{width : 75}} />
                <Box style={{display:"flex"}}>
                  <SubHeading>Explore&nbsp;
                  <Box component="span" style={{color : 'yellow'}} >
                  Plus
                  </Box>
                  </SubHeading>
                  <PlusImg src={subURL} alt="" />
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButton/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
    
    
  )
}

export default Header