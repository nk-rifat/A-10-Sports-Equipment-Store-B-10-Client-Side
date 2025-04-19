import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product/six')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Products</h2>
                <p className="text-gray-600 mt-2">
                    Explore top-quality sports gear loved by athletes <br className="block sm:hidden" /> across Bangladesh!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 w-11/12 mx-auto px-2">
                {
                    products.map(product => (
                        <div key={product._id} className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-100">
                            <figure className="relative">
                                <img
                                    src={product.photo}
                                    alt={product.item}
                                    className="h-52 w-full object-cover rounded-t-xl"
                                />
                                <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    ${product.price}
                                </span>
                            </figure>
                            <div className="card-body space-y-3">
                                <h2 className="text-lg font-semibold text-gray-800">{product.item}</h2>
                                <p className="text-sm text-gray-600">
                                    Explore premium sports equipment crafted for champions.
                                </p>
                                <div className="card-actions justify-between items-center mt-4">
                                    <span className="text-sm text-gray-500">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                                    <Link to={`/view-details/${product._id}`}>
                                        <button className="btn btn-sm btn-primary rounded-full px-5">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default ProductSection;