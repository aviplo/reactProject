import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  function logout() {
    localStorage.removeItem("userObj")
  navigate('/login')
  }
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Nav className="nav nav-tabs">
        <button onClick={()=>{
          navigate("todos")
        }}  
        className="flex-sm-fill text-sm-center nav-link active">Todos</button>
        <button
        onClick={()=>{
          navigate("albums")
        } }
         className="flex-sm-fill text-sm-center nav-link active">Albums</button>
        <button
        onClick={()=>{
          navigate("posts")
        } }  className="flex-sm-fill text-sm-center nav-link active">Posts</button>
        <button
        onClick={()=>{
          navigate("info")
        } }
          className="flex-sm-fill text-sm-center nav-link active">Info</button>
        <button
         className="btn btn-danger" onClick={()=>{
          logout()
         }} >Logout</button>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
