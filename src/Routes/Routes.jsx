import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import AddProduct from "../Components/AddProduct/AddProduct";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/addProduct",
          element:<AddProduct></AddProduct>,
        },
      ],
    },
  ]);

export default Routes;