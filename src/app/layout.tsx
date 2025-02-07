import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Tabs } from "./components/Tabs";
import { ContextProvider } from "./components/ContextProvider";

export const metadata: Metadata = {
  title: "PDHours - Controle de horas",
  description: "Interface para lançamento de horas",
  icons: "/favicon.png", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body style={{ background: "#f4f5f7" }}>
        <ContextProvider>
          <Navbar />
          <Tabs />
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}
