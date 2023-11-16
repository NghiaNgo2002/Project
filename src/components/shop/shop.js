import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import GridView from "./gridView";
import Title from "./title";
import Linebar from "./linebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import BlogList from "../Blog";

function Shop() {
  return (
    <Stack gap={5} className="stack">
    <div className="p-2 header"><Header /></div>
    <div className="p-2 Title"><Title /></div>
    <div className="p-2 linebar "><Linebar /></div>
    <div className="p-2 GridView"><GridView /></div>
    <div className="p-2 footer d-flex align-items-center justify-content-center"><Footer/></div>
  </Stack>

  );
}

export default Shop;
