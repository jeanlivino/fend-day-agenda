import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter basename="/agenda">
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
