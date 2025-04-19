import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MyEquipmentList = () => {
    const loadedItems = useLoaderData();
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState(loadedItems);

    useEffect(() => {
        if (user && loadedItems.length > 0) {
            const loggedInUserItems = loadedItems.filter(item => item.email === user.email);
            setItems(loggedInUserItems);
        }
    }, [user, loadedItems]);

    

    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-11/12 mx-auto">
                {
                    items.map(item => (
                        <div key={item._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.photo} alt="Product Image" className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-semibold">Product Name: {item.item}</h2>
                                <p className="text-lg font-medium text-gray-700">{item.price}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/update-product/${item._id}`}>
                                        <button className="btn btn-primary btn-sm">Update</button>
                                    </Link>
                                    <button  className="btn btn-error btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyEquipmentList;