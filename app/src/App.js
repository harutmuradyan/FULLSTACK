import {ErrorBoundary} from 'react-error-boundary'
import { useEffect , lazy , Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesApp } from './Routes/RoutesApp';
const Home = lazy(() => import("./pages/User/Home/Home"));
const About = lazy(() => import("./pages/User/About/About"));
const Contact = lazy(() => import("./pages/User/Contact/Contact"));
const Product = lazy(() => import("./pages/User/Product/Product"));
const Products = lazy(() => import("./pages/User/Products/Products"));
const Sale = lazy(() => import("./pages/User/Sale/Sale"));
const Search = lazy(() => import("./pages/User/Search/Search"));
const Heart = lazy(() => import("./pages/User/Heart/Heart"));
const ErrorFallback = lazy(() => import("./components/Error/ErrorFallback"));
const Spinner = lazy(() => import("./components/Spinner/Spinner"))

function App() {

  const {PublicRoute , PrivateRoute , PrivetRouteAdmin} = RoutesApp();

  useEffect(() => (
     async function globalFetch () {
        await fetch("/products")
                .then((response) => response.json())
                .then((json) => console.log(json))
     }
  ),[])

  return (
    <div className="App">
      <ErrorBoundary  FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route  element={<PublicRoute/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/product/:id" element={<Product/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/sale" element={<Sale/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/heart" element={<Heart/>}/>
            </Route>  
            <Route element={<PrivateRoute/>}>

            </Route>
            <Route element={<PrivetRouteAdmin/>}>

            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
