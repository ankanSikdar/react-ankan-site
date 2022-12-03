import Head from "next/head";
import { useState } from "react";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Ankan Sikdar</title>
        <meta name="description" content="Ankan's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-gray-900">
        <div className="px-2  min-h-screen max-w-5xl mx-auto">
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <AboutMe />
        </div>
      </main>
    </div>
  );
}
