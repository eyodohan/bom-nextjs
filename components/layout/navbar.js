import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import routes from '../../assets/navbar-items';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'white',
          display: { xs: 'none', sm: 'none', md: 'flex' },
        }}
      >
        <Toolbar>
          <Box
            direction={'row'}
            spacing={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {routes.map((route) => (
              <Button
                key={route.path}
                color='warning'
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {route.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
