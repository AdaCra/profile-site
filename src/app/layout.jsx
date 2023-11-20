`use client`;

import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Portfolio of AH ",
  description: "Fullstack Web development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body style={{ position: "relative" }}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
