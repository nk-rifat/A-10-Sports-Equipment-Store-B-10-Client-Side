import { FaStar } from "react-icons/fa";

const CustomersFeedback = () => {
    const feedbacks = [
        {
            name: "Rafiq Ahmed",
            photo: "https://i.pravatar.cc/100?img=3",
            feedback: "Equip Zone is my go-to for sports gear. Great quality and fast delivery!",
            rating: 5,
        },
        {
            name: "Sadia Rahman",
            photo: "https://i.pravatar.cc/100?img=5",
            feedback: "Absolutely love their collection. Easy to order and great service!",
            rating: 4,
        },
        {
            name: "Tariq Hossain",
            photo: "https://i.pravatar.cc/100?img=7",
            feedback: "I was impressed by their fast response and good pricing!",
            rating: 4,
        },
        {
            name: "Nusrat Jahan",
            photo: "https://i.pravatar.cc/100?img=11",
            feedback: "High-quality products with reasonable prices. Recommended!",
            rating: 5,
        },
        {
            name: "Mahfuzul Islam",
            photo: "https://i.pravatar.cc/100?img=14",
            feedback: "Excellent customer support. They really care about users.",
            rating: 4,
        },
        {
            name: "Lamia Chowdhury",
            photo: "https://i.pravatar.cc/100?img=19",
            feedback: "Wide range of sports items. Loved the experience!",
            rating: 5,
        },
    ];
    return (
        <section className="bg-gradient-to-br from-gray-100 to-white py-14 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">Customer Feedback</h2>
                <p className="text-gray-600 mt-2">Hear what our happy customers are saying!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {feedbacks.map((fb, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={fb.photo} alt={fb.name} className="w-14 h-14 rounded-full" />
                            <div>
                                <h4 className="text-lg font-semibold">{fb.name}</h4>
                                <div className="flex gap-1 text-yellow-400">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>

                        </div>
                        <p className="text-gray-700">{fb.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomersFeedback;