import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { Pricing } from "../components/sections/Pricing";
import { Testimonial } from "../components/sections/Testimonial";
import { Download } from "../components/sections/Download";
import siteConfig from "../config/siteConfig";

const Home: NextPage = () => {
  const openGraph = siteConfig.openGraph;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

        <title>{openGraph.title}</title>
        <meta name="description" content={openGraph.desc} />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://zeitplan.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:description" content={openGraph.desc} />
        <meta property="og:image" content={openGraph.imgUrl} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="zeitplan.pages.dev" />
        <meta property="twitter:url" content={openGraph.url} />
        <meta name="twitter:title" content={openGraph.title} />
        <meta name="twitter:description" content={openGraph.desc} />
        <meta name="twitter:image" content={openGraph.imgUrl} />
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
