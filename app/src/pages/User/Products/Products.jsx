import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));

const Products = () => {
    return (
        <Layout>
            <h1>Products</h1>
        </Layout>
    )
}

export default Products;