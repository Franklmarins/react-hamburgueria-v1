import React from "react";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";

export const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <InputSearch />
      </div>
    </header>
  );
};
