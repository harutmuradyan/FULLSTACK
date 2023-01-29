import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));

const Contact = () => {
    return (
        <Layout>
            <h1>Contact</h1>
        </Layout>
    )
}

export default Contact;