import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Currency from "../pages/Currency";
import Customer from "../pages/Customer";
import Report from "../pages/Report";
import Agents from "../pages/Agents";
import HomeAgents from "../pages/HomeAgents";
import AgentReport from "../pages/AgentReport";

const View = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customer-dashboard" element={<Home />} />
        <Route path="/agents-dashboard" element={<HomeAgents />} />

        <Route path="/currency-create" element={<Currency />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/agents" element={<Agents />} />

        <Route path="/report" element={<Report />} />
        <Route path="/agent-report" element={<AgentReport />} />
        
      </Routes>
    </>
  );
};

export default View;
