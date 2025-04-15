import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Components/Error";
import AllEquipment from "../Pages/AllEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipmentList from "../Pages/MyEquipmentList";
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from "./PrivateRoute";
import ProductSection from "../Pages/ProductSection";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>
    },
    {
        path: '/all-equipment',
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch('http://localhost:5000/product')
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
        </PrivateRoute>
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