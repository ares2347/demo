import React from "react";
import { Routes } from "react-router-dom";
import { Content } from "../../layout/content/Content";
import { Footer } from "../../layout/footer";
import { Header } from "../../layout/header/Header";
import { publicRoutes, getRoutes } from "../../routes/Routes";

export const Public: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <Routes>{getRoutes(publicRoutes)}</Routes>
      </Content>
      <Footer />
    </React.Fragment>
  );
};
