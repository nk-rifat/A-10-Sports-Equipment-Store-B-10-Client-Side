import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "./Banner";
import CustomersFeedback from "./CustomersFeedback";
import Footer from "./Footer";
import ProductSection from "./ProductSection";
import { useEffect } from "react";


const Home = () => {

    const location = useLocation();

    // Set the title dynamically based on the route
    useEffect(() => {
        document.title = 'Home | Equip Zone';
    }, [location]);

    return (
        <div className="bg-gradient-to-br from-gray-100 to-white">
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>

                <section className="w-11/12 mx-auto">
                    <Banner></Banner>
                </section>
            </header>

            <main>
                <section>
                    <ProductSection></ProductSection>
                </section>

                <section>
                    <CustomersFeedback></CustomersFeedback>
                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;