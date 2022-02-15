import React from "react";
import LayoutContainer from "./Container/Container";
import LayoutHeader from "./Header";
import "./Layout.css";
import LayoutSidebar from "./Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="customizer_outer">
            <LayoutHeader />
            <div className="customizer_wrapper">
                <LayoutSidebar />
                <LayoutContainer />
            </div>
        </div>
    )
}