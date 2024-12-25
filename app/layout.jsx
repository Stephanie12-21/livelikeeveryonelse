import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const styles = {
  "@font-face": [poppins],
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "Poppins, sans-serif",
  },
};

export const metadata = {
  title: "Lilee",
  description: "Live like everyone else",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins ">{children}</body>
    </html>
  );
}
