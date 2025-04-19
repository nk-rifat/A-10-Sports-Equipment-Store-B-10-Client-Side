import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

const AddEquipment = () => {

    const { user } = useContext(AuthContext);

    const handleAddEquipment = (event) => {
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

        const newItem = { photo, item, category, price, rating, customization, description, time, stock, email, name };
        console.log(newItem)


        //send data to server 

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        icon: "Success!",
                        text: "Product Added Successfully",
                        confirmButtonText: 'Close'
                    });
                }
                form.reset();
            });
    }
    return (
        <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen">
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="max-w-5xl mx-auto p-10 bg-base-200 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-center text-primary mb-10 tracking-tight">Add a New Product</h2>

                <form onSubmit={handleAddEquipment} className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Image URL</span>
                        </label>
                        <input type="text" name="photo" required placeholder="PhotoURL" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Item Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Product Name</span>
                        </label>
                        <input type="text" name="item" required placeholder="Item Name" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Category</span>
                        </label>
                        <input type="text" name="category" required placeholder="Category" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Price (USD)</span>
                        </label>
                        <input type="number" name="price" required placeholder="Price" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Rating</span>
                        </label>
                        <input type="number" name="rating" required step="1" max="5" placeholder="Rating" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Customization */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Customization Options</span>
                        </label>
                        <input type="text" name="customization" required placeholder="Details About Customization" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Description */}
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Product Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" rows="2" name="description" required placeholder="Provide a clear and concise description of the product..."></textarea>
                    </div>

                    {/* Processing Time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Processing Time</span>
                        </label>
                        <input type="number" name="time" required placeholder="Processing Time" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                    </div>

                    {/* Stock Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-sm text-black uppercase font-semibold">Available Stock</span>
                        </label>
                        <input type="number" name="stock" required placeholder="Stock Quantity" className="input input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full" />
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
                            Submit Product
                        </button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddEquipment;