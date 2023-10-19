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
import Updateproducts from "../Components/UpdataProducts/Updateproducts";
import Advertise from "../Components/Advertise/Advertise";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //   errorElement: <ErrorPage />,
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
        element: <Advertise></Advertise>,
      },
      {
        path: "/mycart/:uid",
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/carts/${params.uid}`)
      },
      {
        path: "/updateproduct/:brand/:id",
        element: <PrivateRoute><Updateproducts></Updateproducts></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}/${params.id}`)
      },
      {
        path: "/viewbrand/:brand",
        element: <Productviews></Productviews>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: "/productdetails/:brand/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}/${params.id}`)
      },
    ],
  },
]);

export default Routes;