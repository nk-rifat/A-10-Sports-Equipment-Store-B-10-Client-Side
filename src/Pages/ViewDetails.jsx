import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const ViewDetails = () => {
    const loadedProducts = useLoaderData();
    const { id } = useParams();

    const matchId = loadedProducts.find(product => product._id === id);
    return (
        <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen">
            <nav>
                <Navbar></Navbar>
            </nav>

            <div className="flex items-center justify-center p-6 mt-12">
                <div className="card w-full max-w-md bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-300">

                    {/* Product Image */}
                    <figure className="rounded-t-xl overflow-hidden">
                        <img
                            src={matchId.photo}
                            alt="Item Image"
                            className="h-64 w-full object-cover"
                        />
                    </figure>

                    {/* Card Body */}
                    <div className="card-body space-y-6 p-6">
                        {/* Product Name */}
                        <h2 className="card-title text-3xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300">
                            {matchId.item}
                        </h2>
                        <p className="text-base text-gray-500">Category: {matchId.category}</p>

                        {/* Description */}
                        <p className="text-base text-gray-700 mt-2 italic">{matchId.description}</p>

                        {/* Product Info in a Single Column */}
                        <div className="space-y-4 text-base text-gray-700">
                            <p><span className="font-semibold text-gray-800">Price:</span> ${matchId.price}</p>
                            <p><span className="font-semibold text-gray-800">Rating:</span> {matchId.rating}</p>
                            <p><span className="font-semibold text-gray-800">Customization:</span> {matchId.customization}</p>
                            <p><span className="font-semibold text-gray-800">Processing Time:</span> {matchId.time}</p>
                            <p><span className="font-semibold text-gray-800">Stock Status:</span>
                                {matchId.stock > 0 ? (
                                    <span className="text-green-600 font-medium">In Stock</span>
                                ) : (
                                    <span className="text-red-500 font-medium">Out of Stock</span>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions justify-end px-6 pb-6 gap-4">
                        <button className="btn btn-primary btn-md hover:scale-105 transition-transform hover:bg-primary/80">
                            Add to Cart
                        </button>
                        <button className="btn btn-outline btn-secondary btn-md hover:scale-105 transition-transform hover:border-secondary/80">
                            More Info
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ViewDetails;