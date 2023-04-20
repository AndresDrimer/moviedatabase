import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Movie DB",
  description: "Movie Database",
  keywords: ["movie", "database"],
  icons: {
    icon: "/icon-cinema.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
