import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {

    const loadedItems = useLoaderData();
    const { category, customization, description, item, photo, price, rating, stock, time, _id } = loadedItems;
    const { user } = useContext(AuthContext);

    const handleUpdateProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const item = form.item.value;
        const category = form.category.value;
        const price = form.price.value; 
        const rating = form.rating.value;
        const customization = form.customization.value;
        const description = form.description.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const name = form.name.value;

        const updateProduct = { photo, item, category, price, rating, customization, description, time, stock, email, name };

        // data send to server
        
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },   
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="max-w-5xl mx-auto p-10 bg-base-200 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-center text-primary mb-10 tracking-tight">Update a Product</h2>

                <form onSubmit={handleUpdateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Image URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="PhotoURL" defaultValue={photo} className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Item Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Product Name</span>
                        </label>
                        <input type="text" name="item" placeholder="Item Name" defaultValue={item} className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Price (USD)</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" defaultValue={price} className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Rating</span>
                        </label>
                        <input type="number" name="rating" step="1" max="5" placeholder="Rating" defaultValue={rating} className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Customization */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Customization Options</span>
                        </label>
                        <input type="text" name="customization" placeholder="Details About Customization" defaultValue={customization} className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Description */}
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Product Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" rows="2" name="description" defaultValue={description} placeholder="Provide a clear and concise description of the product..."></textarea>
                    </div>

                    {/* Processing Time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Processing Time</span>
                        </label>
                        <input type="number" name="time" defaultValue={time} placeholder="Processing Time" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Stock Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Available Stock</span>
                        </label>
                        <input type="number" name="stock" defaultValue={stock} placeholder="Stock Quantity" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* User Email (Read-only) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Your Email</span>
                        </label>
                        <input type="email" name="email" readOnly value={user?.email || ""} className="input input-bordered bg-base-300 rounded-xl w-full text-base-content cursor-not-allowed" />
                    </div>

                    {/* User Name (Read-only) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" readOnly value={user?.displayName || ""} className="input input-bordered bg-base-300 rounded-xl w-full text-base-content cursor-not-allowed" />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control md:col-span-2 mt-4">
                        <button className="btn btn-outline btn-primary font-bold to-secondary  text-lg w-full rounded-xl hover:scale-105 transition-transform duration-300">
                            Update Product Details
                        </button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default UpdateProduct;