// React/Next Imports
import { useEffect } from "react";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports
import B2TStatus from "../assets/functions/B2TStatus";

// Component Imports
import { Top } from "../assets/components/Top";
import { Search } from "../assets/components/Search";
import { Plants_Items_Holder } from "../assets/components/Plants_Items_Holder";
import { B2T } from "../assets/components/B2T";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export const getStaticProps = async () => {
  const plants1ItemsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/data/plants/Page1.json"
  );
  const plants2ItemsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/data/plants/Page2.json"
  );
  const plants3ItemsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/data/plants/Page3.json"
  );
  const plants4ItemsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/data/plants/Page4.json"
  );
  const plants5ItemsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/data/plants/Page5.json"
  );

  const plants1ItemsData = await plants1ItemsRes.json();
  const plants2ItemsData = await plants2ItemsRes.json();
  const plants3ItemsData = await plants3ItemsRes.json();
  const plants4ItemsData = await plants4ItemsRes.json();
  const plants5ItemsData = await plants5ItemsRes.json();

  return {
    props: {
      plants1: plants1ItemsData,
      plants2: plants2ItemsData,
      plants3: plants3ItemsData,
      plants4: plants4ItemsData,
      plants5: plants5ItemsData,
    },
  };
};

export default function Home({ plants1, plants2, plants3, plants4, plants5 }) {
  useEffect(() => {
    window.addEventListener("load", () => {
      B2TStatus();
    });

    window.addEventListener("scroll", () => {
      B2TStatus();
    });
  }, []);

  return (
    <div id="PAGE">
      <Head>
        <title>
          The Fantastic World of Fauna and Flora - Native NC Flora and Fauna.
        </title>

        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/mxrked/floraandfauna/master/assets/images/favicon-16x16.png"
        />
      </Head>

      <Top />

      <Search />

      <Plants_Items_Holder
        set1={plants1}
        set1Class="set-1-item"
        set2={plants2}
        set2Class="set-2-item"
        set3={plants3}
        set3Class="set-3-item"
        set4={plants4}
        set4Class="set-4-item"
        set5={plants5}
        set5Class="set-5-item"
      />

      <B2T />
    </div>
  );
}
