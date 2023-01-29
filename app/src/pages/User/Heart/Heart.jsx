import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));

const Heart = () => {
    return (
        <Layout>
            <h1>Heart</h1>
        </Layout>
    )
}

export default Heart;