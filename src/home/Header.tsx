import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  {
    // title is name of the page that will appear on the dropdown menu 
    title: 'Home',
    // path is where the url or route that the application will load once clicked upon
    path: '/'
  },
  {
    title: 'Projects',
    path: '/projects'
  }
];

const ResponsiveAppBar = () => {
  //This useState is for referencing the DOM through the use of React
  // with the use of typescript, its initial state is null and can change later to an HTMLElement
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  //function to respond to the user event of clicking the mouse on the navbar
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  //function to set that initial state of the navbar as closed
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // material ui app bar
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Box is used instead of a div in order to group elements and set styling */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              //aria-controls sets the ID of the element that the IconButton controls
              aria-controls="menu-appbar"
              //aria-haspopup indicates that the IconButton opens up a menu 
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              //specifies that the menu needs to be anchored
              //when an element is anchored, it is staying in a position relative to another element
              //which is controlled by the props above
              anchorEl={anchorElNav}
              //anchorOrigin specifies where the element 
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              //keepMounted is so that the menu button will always be on the DOM even if its not displayed at the moment
              keepMounted
              //transformOrigin specifies where the menu is relative to the anchor point
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Dynamically generates a list of menu items */}
              {/* pages is the array at the top that holds the name of the button and the path of where it goes to */}
              {pages.map((page, index) => (
                //key is assigned to each menu item in which it needs to render
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  {/* typography is used to display the title of the page */}
                  {/* component specifies that the title will be rendered as a link */}
                  <Typography textAlign="center" component={RouterLink} to={page.path}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            src="/assets/logo-3.svg" 
            alt="Logo"   
            sx={{ width: 45, height: 45 }}
          />
          {/* This will display when the screen is in desktop mode or if the screen is medium or bigger */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* this will not display on extra small screens, but it will on medium */}
            {/* using the map method,  it will create an button for each object in the pages array */}
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={RouterLink}
                to={page.path}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
