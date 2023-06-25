import "./App.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Component/Error";
import ResturantMenu from "./Component/ResturantMenu";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resturant/:id",
        element:<ResturantMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
