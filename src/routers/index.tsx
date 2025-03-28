import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Statistics from "../pages/Statistics";
import Information from "../pages/Information";
import Consult from "../pages/Consult";
import Login from "../pages/admin/Login";
import Admin from "../pages/admin/Admin";
import InformationConfig from "../pages/admin/InformationConfig";
import AdminLayout from "../layouts/AdminLayout";
import StatisticsConfig from "../pages/admin/StatisticsConfig";
import HomeConfig from "../pages/admin/HomeConfig";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/statistics"} element={<Statistics />} />
          <Route path={"/information"} element={<Information />} />
          <Route path={"/consult"} element={<Consult />} />
          <Route path={"/login"} element={<Login />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path={"/admin"} element={<Admin />} />
          <Route path={"/admin/home"} element={<HomeConfig />} />
          <Route path={"/admin/statistics"} element={<StatisticsConfig />} />
          <Route path={"/admin/information"} element={<InformationConfig />} />
        </Route>
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </HashRouter>
  );
};

export default Routers;
