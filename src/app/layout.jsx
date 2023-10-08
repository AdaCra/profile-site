
import "./globals.css";

export const metadata = {
  title: "Portfolio of AH ",
  description: "Fullstack Web development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ position: "relative" }}>{children}</body>
    </html>
  );
}
