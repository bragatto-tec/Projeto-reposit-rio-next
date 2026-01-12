"use client";

import { GlobalStyle } from "./styles/globals";

export default function ClientLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
