import React,{lazy} from 'react'
const Layout = lazy(() => import("../../layout/layout"));

export default function home() {
  return (
    <div>
        <Layout></Layout>
    </div>
  )
}
