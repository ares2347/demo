import React from "react";
import { Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const Content: React.FC<Props> = ({ children }) => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      {children}
    </Container>
  );
};
