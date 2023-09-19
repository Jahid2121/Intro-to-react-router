import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
          <Footer />
        </div>
    );
};

export default Home;<h2>This is the home</h2>