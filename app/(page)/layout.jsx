"use client";
import Footer from "@/components/MainComponent/Footer/Footer";
import Header from "@/components/MainComponent/Header/Header";
import AnimatedSymbol from "@/components/MainComponent/Loading/Loading";
import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#15213d]">
        <AnimatedSymbol />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
