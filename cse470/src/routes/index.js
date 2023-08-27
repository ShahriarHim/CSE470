import Bot from "../pages/bot";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Restaurantslist from "../pages/restrudent_list";
import Package from "../pages/package";
import PkgDetails from "../pages/pkg_details";
// import CustomPack from "../pages/customPack";
import Payment from "../pages/payment";
import AboutMe from "../pages/aboutme";
import RestaurantsShow from "../pages/restaurantsshow";
import RestaurantsTake from "../pages/restaurantstake";
import Apuser from "../pages/admin/adashboard";
import Auser from "../pages/admin/auser";
import Ares from "../pages/admin/ares";
import Alogin from "../pages/admin/admin";
import Custom from "../pages/selection/custom";
// import MenuDetails from "../pages/menud";
import Menucreate from "../pages/admin/menucreate";
import CustomPack from "../pages/test";
import AdminSignup from "../pages/admin/asignup";
import Bkash from "../pages/bkash";
import Rocket from "../pages/rocket";
import Rescreate from "../pages/admin/createres";
import Events from "../pages/events";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/bkash" element={<Bkash/>}></Route>
          <Route path="/rocket" element={<Rocket/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/bot" element={<Bot />}>
      
            {" "}
          </Route>
          <Route path="/" element={<Dashboard />}>
            {" "}
          </Route>
          <Route path="/list" element={<Restaurantslist />}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path= "/package" element={<Package/>}> </Route>
          <Route path= "/pkg_details" element={<PkgDetails/>}> </Route>
          {/* <Route path= "/customPack" element={<CustomPack/>}> </Route> */}
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>

          <Route path="/resin" element={<RestaurantsTake/>}></Route>
          <Route path="/resout" element={<RestaurantsShow />}></Route>

          <Route path="/apuser" element={<Apuser />}></Route>
          <Route path="/userlist" element={<Auser />}></Route>
          <Route path="/reslist" element={<Ares />}></Route>
          <Route path="/alogin" element={<Alogin />}></Route>
          <Route path="/asignup" element={<AdminSignup/>}></Route>
          <Route path="/menucreate" element={<Menucreate/>}></Route>
          <Route path="/rescreate" element={<Rescreate/>}></Route>
          {/* CustomPack */}
          <Route path="/customPack" element={<CustomPack/>}></Route>
          
          {/* / cusutm */}
          <Route path="/custom" element={<Custom />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
