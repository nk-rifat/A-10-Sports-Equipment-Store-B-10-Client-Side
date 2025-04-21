import { Medal, Truck, ShoppingCart, Star } from 'lucide-react';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
    // const location = useLocation();

    // // Set the title dynamically based on the route
    // useEffect(() => {
    //     document.title = 'About-Us | Equip Zone';
    // }, [location]);
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="bg-gradient-to-br from-white via-gray-50 to-slate-100 shadow-xl rounded-3xl px-6 sm:px-10 py-16 max-w-6xl mx-auto mt-20 border border-gray-200 text-gray-800">

                <h2 className="text-4xl sm:text-5xl font-extrabold text-primary text-center mb-8 tracking-tight">About Equip Zone</h2>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    <span className="text-primary font-semibold">Equip Zone</span> is a trusted Bangladeshi online store delivering premium sports gear. Whether you're just starting or a seasoned pro, we bring you the best in cricket, football, badminton, gym accessories, and more — with fast delivery, expert support, and full dedication to your performance.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="flex items-start gap-4">
                        <Medal className="w-7 h-7 text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Top-Quality Gear</h4>
                            <p className="text-gray-600 text-sm">Built for performance, designed for durability. Trusted by pros.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Truck className="w-7 h-7 text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Nationwide Delivery</h4>
                            <p className="text-gray-600 text-sm">Fast and safe delivery across all regions of Bangladesh.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <ShoppingCart className="w-7 h-7 text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Easy Shopping</h4>
                            <p className="text-gray-600 text-sm">User-friendly experience with secure checkout and order tracking.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Star className="w-7 h-7 text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Trusted by Athletes</h4>
                            <p className="text-gray-600 text-sm">Highly rated by local teams, schools, and professionals nationwide.</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mb-10"></div>

                {/* Contact and Support Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-gray-700">
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold text-primary mb-4">📞 Contact Us</h4>
                        <p className="mb-1"><span className="font-medium">Phone:</span> +880 1234 567 890</p>
                        <p className="mb-1"><span className="font-medium">Email:</span> support@equipzone.com</p>
                        <p><span className="font-medium">Address:</span> 12/3 Gulshan Avenue, Dhaka 1212</p>
                    </div>

                    {/* Support Info */}
                    <div>
                        <h4 className="text-xl font-bold text-primary mb-4">💬 Support & Help</h4>
                        <p className="mb-2">
                            Need help choosing the right product or tracking your order?
                        </p>
                        <p>We’re available 24/7 through live chat, email, or phone. Fast response, friendly team.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;

