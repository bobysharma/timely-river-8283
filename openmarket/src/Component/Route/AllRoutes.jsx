import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Kid from "../../Pages/Kid";
import MenProduct from "../../Pages/MenProduct";
import SingleProduct from "../../Pages/SingleProduct";
import Womenproduct from "../../Pages/Womenproduct";

const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kid" element={<Kid />} />
            <Route path="/women" element={<Womenproduct />} />
            <Route path="/men" element={<MenProduct />} />
            <Route path="/men:id" element={<SingleProduct />} />
        </Routes>
        </>
    )
}
export default AllRoutes;
