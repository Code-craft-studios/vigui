'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '@/ui/Logo';
import styles from './styles.module.css';
import { Container } from '@mui/material';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Inicio',
    url: '#section-inicio',
  },
  {
    name: 'Conocenos',
    url: '#section-conocenos',
  },
  {
    name: 'Beneficios',
    url: '#section-beneficios',
  },
  {
    name: 'Planes y servicios',
    url: '#section-planes',
  },
  {
    name: 'Testimonios',
    url: '#section-testimonios',
  },
  {
    name: 'Consultas',
    url: '#section-frecuentes',
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        display={'flex'}
        py={3}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Logo />
      </Box>
      <Divider />
      <List>
        {navItems.map((nav) => (
          <a href={nav.url} className={styles.link} key={nav.url}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', position: 'sticky', top: 0, zIndex: 500 }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: 'var(--primary-300)',
          position: 'relative',
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((nav) => (
                <a href={nav.url} className={styles.link} key={nav.url}>
                  <Button sx={{ color: '#fff' }}>{nav.name}</Button>
                </a>
              ))}
            </Box>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'var(--primary-300)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
