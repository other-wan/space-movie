import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./Home";
import Movies from "./Movie";
import Search from "./Search";
import TvShows from "./TvShows";

const Pages = () => {
    return ( 
        <Routes>
            <Route path="/" element={
                <Layout>
                    <Home />
                </Layout>
            } />

            <Route path="/movies" element={
                <Layout>
                    <Movies />
                </Layout>
            } />

        
            <Route path="/tvs" element={
                <Layout>
                    <TvShows />
                </Layout>
            } />

            <Route path="/bookmark" element={
                <Layout>
                    <Home />
                </Layout>
            } />

            <Route path="/search" element={
                <Layout>
                    <Search />
                </Layout>
            } />
        </Routes>
     );
}
 
export default Pages;
