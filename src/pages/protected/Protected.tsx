import React from "react";
import {Routes} from "react-router-dom";
import {protectedRoutes, getRoutes} from "../../routes/Routes"

export const Protected: React.FC = () => {
    return <Routes>{getRoutes(protectedRoutes)}</Routes>
}