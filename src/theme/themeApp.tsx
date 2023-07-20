'use client';

import { createTheme } from '@mui/material';

/* TIPAR LAS NUEVAS VARIANTES */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // permiten la configuración mediante `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Actualizar las opciones de variantes de la tipografía
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}

/* CREACION DE TEMA */
export const themeApp = createTheme({
  palette: {
    primary: {
      main: '#243061',
      light: '#243061',
      dark: '#243061',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f18423',
      light: '#f18423',
      dark: '#f18423',
      contrastText: '#fff',
    },
    // text: {
    //   primary: "#243061",
    //   secondary: "#f18423",
    //   disabled: "#f18423",
    // },
    // background: {
    //   default: "#243061",
    //   paper: "#f18423",
    // },
    // error: {
    //   main: "#f18423",
    //   light: "#f18423",
    //   dark: "#f18423",
    //   contrastText: "#fff",
    // },
  },
  // typography: {
  //   fontFamily: 'cursive',
  //   h1: {
  //     fontSize: '2rem',
  //     '@media (min-width:600px)': {
  //       fontSize: '2rem',
  //     },
  //   },
  //   poster: {
  //     fontSize: '2rem',
  //   }
  // },
  components: {
    // MuiButton: {
    //   variants: [
    //     {
    //       props: { variant: 'contained', color: 'secondary' },
    //       style: {
    //         color: '#fff',
    //         padding: '10px 20px',
    //       }
    //     }
    //   ]
    // },
    // MuiTypography: {
    //   variants: [
    //     {
    //       props: { variant: 'h4' },
    //       style: {
    //         fontWeight: 700,
    //       },
    //     },
    //     {
    //       props: { variant: 'h5' },
    //       style: {
    //         fontWeight: 700,
    //       },
    //     }
    //   ],
    //   defaultProps: {
    //     variantMapping: {
    //       // Mapear la nueva variante para renderizar un <h1> por defecto.
    //       poster: 'h1',
    //     },
    //   },
    // }
  },
});

/* paleta de colores */

/* definir textos responsive */
// themeApp.typography.h4 = {
//   fontSize: '1.5rem','@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [themeApp.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };

// themeApp.typography = {
//   h3: {
//     fontSize: '1.5rem',
//     '@media (min-width:600px)': {
//       fontSize: '1.5rem',
//     },
//     [themeApp.breakpoints.up('md')]: {
//       fontSize: '2rem',
//     }
//   }
// }
