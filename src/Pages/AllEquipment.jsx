import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

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
        <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen">
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="py-10 px-4 w-11/12 mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6">
                    All Equipment
                </h2>

                {/* Sort Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="btn btn-sm sm:btn-md btn-outline btn-primary hover:scale-105 transition-transform duration-300"
                    >
                        Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
                    </button>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200 bg-white">
                    <table className="table w-full text-sm sm:text-base">
                        <thead className="bg-base-200 text-gray-700">
                            <tr className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold text-base">
                                <th className="text-center font-semibold py-3">Name</th>
                                <th className="text-center font-semibold">Category</th>
                                <th className="text-center font-semibold">Price ($)</th>
                                <th className="text-center font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedProducts.map((product) => (
                                <tr key={product._id} className="hover:bg-gray-50 transition">
                                    <td className="text-center py-3 text-gray-800">{product.item}</td>
                                    <td className="text-center text-gray-700">{product.category}</td>
                                    <td className="text-center text-gray-700">${product.price}</td>
                                    <td className="text-center">
                                        <Link to={`/view-details/${product._id}`}>
                                            <button className="btn btn-sm btn-primary hover:brightness-110 hover:scale-105 transition-all duration-300">
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

            <div className="mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllEquipment;
