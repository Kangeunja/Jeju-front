import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
