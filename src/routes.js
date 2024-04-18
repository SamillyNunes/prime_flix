import { BrowserRouter, Routes, Route } from "react-router-dom";

import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Error from "./pages/Error";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Movie/> } />
                <Route path="/favoritos" element={ <Favorites/> } />

                <Route path="*" element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;