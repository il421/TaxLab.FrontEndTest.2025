import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent, PropsWithChildren } from "react";

const CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: CACHE_TIME,
      staleTime: CACHE_TIME
    }
  }
});

export const ReactQueryProvider: FunctionComponent<PropsWithChildren> = ({
  children
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
