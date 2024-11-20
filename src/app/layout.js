import { Inter } from 'next/font/google';
import "./globals.css";
import "@fortawesome/react-fontawesome"
import Nav from "./(components)/Nav";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Anna Holmquist Portfolio",
  description: "My personal webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div className="flex flex-col h-screen max-h-screen"> 
        <Nav/>
        <div className="flex-grow overflow-y-auto bg-page text-slate-200">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
