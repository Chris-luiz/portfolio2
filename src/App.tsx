import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/AppRoutes";
import { BottomNavigation, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={routes}></RouterProvider>
      <BottomNavigation />
    </div>
  );
}

export default App;
