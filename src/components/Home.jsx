import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div>
            <Header />
          <h2>This is the home</h2>  
          <Outlet ></Outlet>
        </div>
    );
};

export default Home;<h2>This is the home</h2>