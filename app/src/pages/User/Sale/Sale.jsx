import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));

const Sale = () => {
    return (
        <Layout>
            <h1>Sale</h1>
        </Layout>
    )
}

export default Sale;