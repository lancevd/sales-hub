import "./globals.css";
import Header from "@/components/global/Header";
import Sidebar from "@/components/global/Sidebar";

export const metadata = {
  title: "Sales Hub",
  description: "A CRM for small businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
