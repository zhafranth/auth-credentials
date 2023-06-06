import dynamic from "next/dynamic";
import React from "react";

const DashboardPage = dynamic(() => import("../containers/dashboard"), { ssr: false });

const Dashboard = () => <DashboardPage />;

export default Dashboard;
