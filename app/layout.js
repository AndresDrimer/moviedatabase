import "./globals.css";
import { Roboto } from "next/font/google";


/** 
 * @type {import("next").Metadata} 
 */

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Abeto´s Movie DB",
  description: "Movie Database",
  keywords: ["movie", "database"],
  icons: {
    icon: "/film.ico", //no anda el ico, no sé por qué
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      
      
          {children}
      
      
      </body>
    </html>
  );
}
