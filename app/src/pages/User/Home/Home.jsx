import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));
const Category = lazy(() => import("../../../components/Category/Category"));
const Carousel = lazy(() => import("../../../components/Carousel/Carousel"));

const Home = () => {
    return (
        <Layout>
            <Carousel/>
            <Category/>
            <h1>Home</h1>
        </Layout>
    )
}

export default Home;