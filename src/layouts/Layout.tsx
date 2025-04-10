import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/UI";
import ChatBot from "../components/Modals/ChatBot";

const Layout = () => {
  return (
    <div>
      <Header />
      <main><Outlet/></main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;