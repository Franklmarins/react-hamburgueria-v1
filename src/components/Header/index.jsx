import React from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Container } from "../../styles/container";
import { StyledHeader } from "../../styles/Header";

export const Header = ({ showProducts }) => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Form showProducts={showProducts} />
      </Container>
    </StyledHeader>
  );
};
