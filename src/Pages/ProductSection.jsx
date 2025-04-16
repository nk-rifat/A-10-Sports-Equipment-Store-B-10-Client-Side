import { useEffect, useState } from "react";

const ProductSection = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 w-11/12 mx-auto">
            {
                items.map(item => (
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={item.photo}
                                alt="Equipment"
                                className="h-48 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-base font-medium text-gray-600"><span className="font-semibold text-black">Product Name:</span> {item.item}</h2>
                            <p className="text-base font-medium text-gray-600"> Price: {item.price} ($)</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-md btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductSection;