'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#2D9596',
      light: '#F1FADA',
      dark: '#9AD0C2'
    },
    secondary: {
      main: '#F2F597'
    }

  },
})

export default theme