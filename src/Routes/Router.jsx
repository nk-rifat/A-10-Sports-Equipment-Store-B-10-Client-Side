import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Components/Error";
import AllEquipment from "../Pages/AllEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipmentList from "../Pages/MyEquipmentList";
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import AboutUs from "../Pages/AboutUs";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>
    },
    {
        path: '/all-equipment',
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch('https://equip-zone.vercel.app/product')
    },
    {
        path: '/add-equipment',
        element: <PrivateRoute>
            <AddEquipment></AddEquipment>
        </PrivateRoute>
    },
    {
        path: '/my-equipment',
        element: <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
        </PrivateRoute>,
        loader: () => fetch('https://equip-zone.vercel.app/product')
    },
    {
        path: '/view-details/:id',
        element: <PrivateRoute>
            <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://equip-zone.vercel.app/product/${params.id}`)
    },
    {
        path: '/update-product/:id',
        element: <PrivateRoute>
            <UpdateProduct></UpdateProduct>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://equip-zone.vercel.app/product/${params.id}`)
    },
    {
        path: 'about-us',
        element: <AboutUs></AboutUs>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }

])

export default Router;