import React,{lazy} from 'react'
const Header = lazy(() => import("../components/header/header"));
const Footer = lazy(() => import("../components/footer/footer"));

export default function layout() {
  return (
    <div className='layout'>
      <Header />
      <main></main>
      <Footer/>
    </div>
  )
}
