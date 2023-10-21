import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../Components/Root/Root";
import AddProduct from "../Components/AddProduct/AddProduct";
import Home from "../Components/Home/Home";
import Productviews from "../Components/ProductViews/Productviews";
import ProductDetails from "../Components/ProductViews/ProductDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Mycart from "../Components/Mycart/Mycart";
import Advertise from "../Components/Advertise/Advertise";
import Errorpage from "../Components/Errorpage/Errorpage";
import Updateproducts from "../Components/Updataproducts/Updateproducts";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },
      {
        path: "/addProduct",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/advertise",
        element: <PrivateRoute><Advertise></Advertise></PrivateRoute>,
      },
      {
        path: "/mycart/:uid",
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader: ({ params }) => fetch(`https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/carts/${params.uid}`)
      },
      {
        path: "/updateproduct/:brand/:id",
        element: <PrivateRoute><Updateproducts></Updateproducts></PrivateRoute>,
        loader: ({ params }) => fetch(`https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/products/${params.brand}/${params.id}`)
      },
      {
        path: "/viewbrand/:brand",
        element: <Productviews></Productviews>,
        loader: ({ params }) => fetch(`https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/products/${params.brand}`)
      },
      {
        path: "/productdetails/:brand/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/products/${params.brand}/${params.id}`)
      },
    ],
  },
]);

export default Routes;