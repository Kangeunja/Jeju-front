import { Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Main from "../components/main/Main";
import Travel from "../components/travel/Travel";
import Screen from "../components/screen/Screen";
import Tour from "../components/tour/Tour";
import History from "../components/history/History";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="travel" element={<Travel />}></Route>
        <Route path="screen" element={<Screen />}></Route>
        <Route path="tour" element={<Tour />}></Route>
        <Route path="history" element={<History />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
