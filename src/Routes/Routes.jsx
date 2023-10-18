import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import AddProduct from "../Components/AddProduct/AddProduct";
import Home from "../Components/Home/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home></Home>,
          loader:()=>fetch('/brands.json')
        },
        {
          path: "/addProduct",
          element:<AddProduct></AddProduct>,
        },
      ],
    },
  ]);

export default Routes;