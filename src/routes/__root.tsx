import "@styles/index.css";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

import Header from "@components/ui/Header/Header";
import Footer from "@components/ui/Footer/Footer";

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [queryClient] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      })
    );
    return (
      <>
        <ScrollRestoration />
        <Header />
        <QueryClientProvider client={queryClient}>
          <main className="flex-1 flex flex-col">
            <Outlet />
          </main>
        </QueryClientProvider>
        <Footer test="test" />
      </>
    );
  },
});
