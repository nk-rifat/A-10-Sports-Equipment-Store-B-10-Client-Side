import Navbar from "../Components/Navbar";
import Banner from "./Banner";
import CustomersFeedback from "./CustomersFeedback";
import Footer from "./Footer";
import ProductSection from "./ProductSection";


const Home = () => {

    return (
        <div className="bg-gradient-to-br from-gray-100 to-white">
            <header>
                <nav className="w-11/12 mx-auto">
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