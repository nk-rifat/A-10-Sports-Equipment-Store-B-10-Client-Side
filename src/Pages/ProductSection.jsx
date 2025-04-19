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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-11/12 mx-auto">
            {
                products.map(product => (
                    <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={product.photo}
                                alt="Equipment"
                                className="h-48 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-base font-medium text-gray-600"><span className="font-semibold text-black">Product Name:</span> {product.item}</h2>
                            <p className="text-base font-medium text-gray-600"> Price: {product.price} ($)</p>
                            <div className="card-actions justify-end">
                                <Link to={`/view-details/${product._id}`}>
                                    <button className="btn btn-md btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductSection;