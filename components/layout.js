import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./header";
import SystemBar from "./systembar";
import Footer from "./footer";
import { GlobalMouseMoveProvider } from "../hooks/useGlobalMouseMove";

export default function Layout({ children, pageTitle }) {
  const faviconVar = Math.floor(Math.random() * 9) + 1;

  const globalTitle = `${pageTitle ? `${pageTitle} —` : ""} Otavio Vidal`;

  return (
    <GlobalMouseMoveProvider>
      <Head>
        <title>{globalTitle}</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href={`assets/favicon-${faviconVar}.ico`} />
      </Head>

      <div className="header-container">
        <Header />
      </div>
      <SystemBar />
      <div className="page-entrance">
        {children}
        <Footer />
      </div>
    </GlobalMouseMoveProvider>
  );
}
