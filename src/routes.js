import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Movie/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;