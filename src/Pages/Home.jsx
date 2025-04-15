import Navbar from "../Components/Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <header>
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>

                <section className="w-11/12 mx-auto">
                    <Banner></Banner>
                </section>
            </header>

            <main>

            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;