import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Components/Error";
import AllEquipment from "../Pages/AllEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipmentList from "../Pages/MyEquipmentList";
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>
    },
    {
        path: '/all-equipment',
        element: <AllEquipment></AllEquipment>
    },
    {
        path: '/add-equipment',
        element: <AddEquipment></AddEquipment>
    },
    {
        path: '/my-equipment',
        element: <MyEquipmentList></MyEquipmentList>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }

    


])

export default Router;