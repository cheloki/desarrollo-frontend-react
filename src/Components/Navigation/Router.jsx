import Home from "../../screens/Home.jsx";
import LandingPage from "../../screens/LandingPage.jsx";
import Product from "../../screens/Product.jsx";
import About from "../../screens/About.jsx";
import Think from "../../screens/Think.jsx";
import Login from "../../screens/Login.jsx";
import { Route, Routes } from "react-router";
import Counter from "../Counter/Counter.jsx";

const Router = () =>{
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="products" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="think" element={<Think />} />
            <Route path="counter" element={<Counter />} /> 
            <Route path="login" element={<Login />} /> 
        </Routes>
    );
}

export default Router;