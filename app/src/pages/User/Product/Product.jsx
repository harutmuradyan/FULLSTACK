import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));
const Counter = lazy(() => import("../../../components/Counter/Counter"));

const Product = () => {
    return (
        <Layout>
            <h1>Product</h1>
        </Layout>
    )
}

export default Product;