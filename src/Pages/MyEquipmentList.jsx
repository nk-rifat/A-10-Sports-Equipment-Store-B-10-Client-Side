import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
    const loadedProducts = useLoaderData();
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(loadedProducts);

    useEffect(() => {
        if (user && loadedProducts.length > 0) {
            const loggedInUserProducts = loadedProducts.filter(product => product.email === user.email);
            setProducts(loggedInUserProducts);
        }
    }, [user, loadedProducts]);

    const handleDeleteProduct = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/product/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                            const remaining = products.filter(product => product._id !== id);
                            setProducts(remaining);
                        }
                    })
            }
        });
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen">
            <nav>
                <Navbar></Navbar>
            </nav>

            <div className="w-11/12 mx-auto mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6">
                    My Equipment
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {products.map(item => (
                        <div key={item._id} className="card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl">
                            <figure className="rounded-t-xl overflow-hidden">
                                <img
                                    src={item.photo}
                                    alt="Product Image"
                                    className="h-52 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body p-5">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                    {item.item}
                                </h2>
                                <p className="text-base font-medium text-primary">${item.price}</p>

                                <div className="card-actions justify-end gap-2 mt-6">
                                    <Link to={`/update-product/${item._id}`}>
                                        <button className="btn btn-sm btn-outline btn-primary hover:scale-105 transition-transform duration-200">
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteProduct(item._id)}
                                        className="btn btn-sm btn-outline btn-error hover:scale-105 transition-transform duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MyEquipmentList;