import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AllEquipment = () => {
    const loadedItems = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="p-6">
                <h2 className="text-3xl font-bold text-primary mb-10 tracking-tight">All Equipment</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full border border-gray-300">
                        <thead>
                            <tr className="bg-base-200">
                                <th className="text-center font-semibold text-black">Name</th>
                                <th className="text-center font-semibold text-black">Category</th>
                                <th className="text-center font-semibold text-black">Price ($)</th>
                                <th className="text-center font-semibold text-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadedItems.map((item) => (
                                <tr key={item._id}>
                                    <td className="text-center">{item.item}</td>
                                    <td className="text-center">{item.category}</td>
                                    <td className="text-center">{item.price}</td>
                                    <td className="text-center">
                                        <Link to={`/view-details/${item._id}`}>
                                            <button className="btn btn-outline btn-primary font-bold hover:scale-105 transition-transform duration-300">
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllEquipment;