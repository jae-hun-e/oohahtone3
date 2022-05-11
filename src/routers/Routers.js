import Header from "../components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Guide from "../pages/Guide";
import Mypage from "../pages/Mypage";
import Other from "../pages/Other";
import Buy from "../pages/Buy";
import Shipping from "../pages/Shipping";
import Main from "../pages/Main";

const Routers = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Guide />} />
                <Route path="/main" element={<Main />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/other" element={<Other />} />
                <Route path="/Buy" element={<Buy />} />
                <Route path="/shipping" element={<Shipping />} />
            </Routes>
        </Router>
    );
};

export default Routers;
