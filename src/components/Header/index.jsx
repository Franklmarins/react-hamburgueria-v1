import React from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";

export const Header = ({ showProducts }) => {
  return (
    <header>
      <div>
        <Logo />
        <Form showProducts={showProducts} />
      </div>
    </header>
  );
};
