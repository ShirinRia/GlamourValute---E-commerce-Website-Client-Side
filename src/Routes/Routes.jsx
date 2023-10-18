import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import AddProduct from "../Components/AddProduct/AddProduct";
import Home from "../Components/Home/Home";
import Productviews from "../Components/ProductViews/Productviews";
import ProductDetails from "../Components/ProductViews/ProductDetails";

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
        {
          path: "/viewbrand/:brand",
          element:<Productviews></Productviews>,
          loader:({params})=>fetch(`http://localhost:3000/products/${params.brand}`)
        },
        {
          path: "/productdetails/:brand/:id",
          element:<ProductDetails></ProductDetails>,
          loader:({params})=>fetch(`http://localhost:3000/products/${params.brand}/${params.id}`)
        },
      ],
    },
  ]);

export default Routes;