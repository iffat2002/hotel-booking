import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
//import { Inter } from "next/font/google";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
//import useTheme from "@mui/styles/useTheme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ThreeImages from "../components/ThreeImages";
import WelcomePack from "../components/WelcomePack";
import Featured from "../components/Featured";
import QRcode from "../components/QRcode";
import Footer from "../components/Footer";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const theme = useTheme();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className={styles.herobackground}>
            <Navbar />
            <Header />
            <Hero />
            <ThreeImages />
          </div>
          <div>
            <WelcomePack />
            <Featured />
            <QRcode />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
