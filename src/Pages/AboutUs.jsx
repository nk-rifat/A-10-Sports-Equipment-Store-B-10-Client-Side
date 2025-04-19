import { Medal, Truck, ShoppingCart, Star } from 'lucide-react';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto mt-14 text-gray-800 border border-gray-200">
                <h2 className="text-4xl font-bold mb-6 text-center text-primary">About Equip Zone</h2>
                <p className="text-lg mb-8 text-center leading-relaxed">
                    Equip Zone is a premier Bangladeshi online sports equipment store, dedicated to empowering athletes and sports lovers across the country. We offer a diverse collection of high-quality sports gear, apparel, and accessories for a variety of sports including cricket, football, badminton, fitness training, and more.
                    <br /><br />
                    Our mission is to provide easy access to trusted sports products for everyone — from beginners to professionals. With Equip Zone, customers can enjoy a hassle-free shopping experience, fast delivery, secure payment methods, and expert support to help choose the right gear.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                        <Medal className="text-primary w-7 h-7" />
                        <div>
                            <h4 className="font-semibold text-lg">Quality Products</h4>
                            <p className="text-base">We ensure top-grade sports items for every athlete.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Truck className="text-primary w-7 h-7" />
                        <div>
                            <h4 className="font-semibold text-lg">Fast Delivery</h4>
                            <p className="text-base">Quick and dependable delivery all over Bangladesh.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <ShoppingCart className="text-primary w-7 h-7" />
                        <div>
                            <h4 className="font-semibold text-lg">Easy Shopping</h4>
                            <p className="text-base">Simple and secure shopping from your home.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Star className="text-primary w-7 h-7" />
                        <div>
                            <h4 className="font-semibold text-lg">Trusted by Players</h4>
                            <p className="text-base">Highly rated by local athletes and teams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

