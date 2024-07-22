import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

describe("HomePage", () => {
  const queryClient = new QueryClient();

  const homePage = (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </QueryClientProvider>
  );

  it("renders homepage component", () => {
    render(homePage);
  });

});
