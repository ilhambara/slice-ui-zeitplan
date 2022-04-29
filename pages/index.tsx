import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { Pricing } from "../components/sections/Pricing";
import { Testimonial } from "../components/sections/Testimonial";
import { Download } from "../components/sections/Download";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Zeitplan &ndash; Landing Page UI</title>
        <meta name="description" content="A custom boilerplate to get the fastest setup for Next.js with Chakra UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <Pricing />
      <Testimonial />
      <Download />
    </>
  );
};

export default Home;
