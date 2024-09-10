'use client'

import React from "react";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from 'styled-components';
import theme from '../theme'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const roboto = localFont({
  src: [
    {
      path: './fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-roboto",  // Definindo a variável para Roboto
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}