import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const ViewDetails = () => {
    const loadedItems = useLoaderData();
    const { id } = useParams();

    const matchId = loadedItems.find(item => item._id === id);
    console.log(matchId)
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
                <div className="card w-full max-w-md bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure>
                        <img src={matchId.photo} alt="Item Image" className="h-60 w-full object-cover" />
                    </figure>
                    <div className="card-body space-y-2">
                        <h2 className="card-title text-2xl font-semibold">Item Name: {matchId.item}</h2>
                        <p className="text-sm text-gray-500">Category: {matchId.category}</p>

                        <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
                            <p><span className="font-semibold text-base-content">Price:</span> {matchId.price}</p>
                            <p><span className="font-semibold text-base-content">Rating:</span> {matchId.rating}</p>
                            <p><span className="font-semibold text-base-content">Processing Time:</span> {matchId.time}</p>
                            <p><span className="font-semibold text-base-content">Stock Status:</span> {matchId.stock}</p>
                        </div>
                    </div>
                    <div class="card-actions justify-end mt-4">
                        <button class="btn btn-primary btn-sm">Add to Cart</button>
                        <button class="btn btn-outline btn-secondary btn-sm">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;