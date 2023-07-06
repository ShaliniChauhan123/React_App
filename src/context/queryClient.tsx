import React from "react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();
interface AppPatientDetailProviderProps {
  children: ReactNode;
}

const AppQueryClientProvider = ({
  children,
}: AppPatientDetailProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryClientProvider;
