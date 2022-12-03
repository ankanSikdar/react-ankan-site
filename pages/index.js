import Head from "next/head";
import { useState } from "react";
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
      <main className="px-2 dark:bg-black">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </main>
    </div>
  );
}
