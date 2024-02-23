"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "@/components/Clients";
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import StyledComponentsRegistry from "./registry";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ApolloProvider client={client}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <Header />
              <Clients />
              {children}
            </ThemeProvider>
            </StyledComponentsRegistry>
          </ApolloProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
