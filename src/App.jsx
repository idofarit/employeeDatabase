import React from "react";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";
import HomeLayout from "./ui/HomeLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
      <HomeLayout />
    </QueryClientProvider>
  );
};

export default App;
