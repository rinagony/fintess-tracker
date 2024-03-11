"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/app/_components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import StyledComponentsRegistry from "./registry";
import Provider from "./_components/SessionProvider";
import ProtectedRoute from "./protected";
import Drawer from "./_components/Drawer";
import styled from "styled-components";

const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ApolloProvider client={client}>
            <Provider>
              <StyledComponentsRegistry>
                <ThemeProvider theme={theme}>
                  <ProtectedRoute>
                    <Header />
                    <WrapperContent>
                      <Drawer />
                      {children}
                    </WrapperContent>
                  </ProtectedRoute>
                </ThemeProvider>
              </StyledComponentsRegistry>
            </Provider>
          </ApolloProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
