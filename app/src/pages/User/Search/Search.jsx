import { lazy } from "react";
const Layout = lazy(() => import("../../../components/Layout/Layout"));

const Search = () => {
    return (
        <Layout>
            <h1>Search</h1>
        </Layout>
    )
}

export default Search;