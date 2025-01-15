import Home from "../../screens/Home.jsx";
import Product from "../../screens/Product.jsx";
import About from "../../screens/About.jsx";
import Think from "../../screens/Think.jsx";
import { Route, Routes } from "react-router";
import Counter from "../Counter/Counter.jsx";

const Router = () =>{
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="think" element={<Think />} />
            <Route path="counter" element={<Counter />} /> 
        </Routes>
    );
}

export default Router;