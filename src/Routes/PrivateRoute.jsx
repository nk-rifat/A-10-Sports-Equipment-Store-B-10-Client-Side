import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center mt-8">
            <span className="loading loading-spinner text-accent"></span>
        </div>
    }

    if (user) {
        return children;
    }
};

export default PrivateRoute;