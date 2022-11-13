import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer'

const Layout = () => {
  const data = localStorage.getItem("userObj");
  const user = JSON.parse(data);
  return (
    <React.Fragment>
      <div className={"bg-success p-2 text-dark bg-opacity-10"} style={{backgroundColor: "skyblue"}}>
      {user ? <><h1>Welcome</h1> <h3>{user.name}</h3></> : <> <h1>Wellcom</h1> <br/> <h3>please login</h3></>}
      <Navbar />
      </div>
      <Outlet />
      <div><Footer/></div>
      
    </React.Fragment>
  );
};

export default Layout;
