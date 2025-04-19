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
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-11/12 mx-auto">
                {
                    products.map(item => (
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
                                    <button onClick={() => handleDeleteProduct(item._id)} className="btn btn-error btn-sm">Delete</button>
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