import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useAppContext } from "@/context/app.context";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { state, toggleTheme } = useAppContext();
  return (
    <>
      <Header />
      <main className={`${state.theme === "dark" ? "theme-dark" : ""}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
