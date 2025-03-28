import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/UI";

const Layout = () => {
  return (
    <div>
      <Header />
      <main><Outlet/></main>
      <Footer />
    </div>
  );
};

export default Layout;