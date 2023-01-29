import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));

const About = () => {
    return (
        <Layout>
            <h1>About</h1>
        </Layout>
    )
}

export default About;