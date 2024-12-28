"use client";

import defaultOptions from "@/config/reactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function TanstackQueryProvider({ children }) {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
