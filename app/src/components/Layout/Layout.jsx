import { lazy } from "react";
const Header = lazy(() => import("../Header/Header"));
const Footer = lazy(() => import("../Footer/Footer"));

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>       
    )
} 

export default Layout;