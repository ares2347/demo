import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Protected } from "./pages/protected/Protected";
import { Public } from "./pages/public/Public";
import { ProtectedRoute } from "./routes/ProtectedRoutes";

import { theme } from "./theme";

import "./App.css";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={"/*"} element={<Public />} />
          <Route
            path={"/protected/*"}
            element={
              <ProtectedRoute>
                <Protected />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
