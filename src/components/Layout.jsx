import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {Hero} from "./Hero";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50"><Navbar /></div>
     

      {/* Contenu principal */}
      <div className="flex-1">
        <Hero />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
