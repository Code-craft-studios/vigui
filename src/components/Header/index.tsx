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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{
    name: 'Inicio',
    url: '#section-inicio'
  },
  {
    name: 'Conocenos',
    url: '#section-conocenos'
  },
  {
    name: 'Planes y servicios',
    url: '#section-planes'
  },
  {
    name: 'Consultas',
    url: '#section-frecuentes'
  },
  {
    name: 'Testimonios',
    url: '#section-testimonios'
  },
  {
    name: 'Beneficios',
    url: '#section-beneficios'
  }];

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo />
      <Divider />
      <List>
        {navItems.map((nav) => (
          <a href={nav.url} className={styles.link}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </a>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: 'var(--c-primary)'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((nav) => (
              <a href={nav.url} className={styles.link}>
                <Button key={nav.url} sx={{ color: '#fff' }}>
                  {nav.name}
                </Button>
              </a>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'var(--c-primary)' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;