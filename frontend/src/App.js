import React,{lazy} from 'react'
import { Route , Routes } from "react-router-dom"
const Home = lazy(() => import("./pages/home/home"));

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

