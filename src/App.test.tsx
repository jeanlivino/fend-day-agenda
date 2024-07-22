import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Routing Test", () => {
  it("Check Home Route", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(screen.getByText("Agenda do Evento")).toBeInTheDocument();
  });
});
