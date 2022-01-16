import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import light from "styles/themes/light";
import GlobalStyle from "styles/global";
import Header from "components/Header/Header";
import useToogle from "app/useToogle/useToogle";

const Home: NextPage = () => {
  const { state, changeState } = useToogle();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={state ? light : dark}>
        <header>
          <Header />
          <button onClick={changeState}></button>
        </header>
        <footer></footer>
      </ThemeProvider>
    </>
  );
};

export default Home;
