import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AllEquipment = () => {
    const loadedProducts = useLoaderData();
    const [sortOrder, setSortOrder] = useState('asc'); // Default sort order (ascending)

    // Sort products based on price
    const sortedProducts = [...loadedProducts].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;  // Sort ascending (low to high)
        } else {
            return b.price - a.price;  // Sort descending (high to low)
        }
    });

    return (
        <div className="w-11/12 mx-auto">
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="p-6">
                <h2 className="text-3xl font-bold text-primary  tracking-tight">All Equipment</h2>

                {/* Sort Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="btn btn-outline btn-primary"
                    >
                        Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
                    </button>
                </div>

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
                            {sortedProducts.map((product) => (
                                <tr key={product._id}>
                                    <td className="text-center">{product.item}</td>
                                    <td className="text-center">{product.category}</td>
                                    <td className="text-center">{product.price}</td>
                                    <td className="text-center">
                                        <Link to={`/view-details/${product._id}`}>
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
