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
      <body className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-200 p-4 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
