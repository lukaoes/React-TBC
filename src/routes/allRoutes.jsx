import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home"

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
