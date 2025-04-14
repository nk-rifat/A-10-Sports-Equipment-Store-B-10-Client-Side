import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Components/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>
    }
])

export default Router;