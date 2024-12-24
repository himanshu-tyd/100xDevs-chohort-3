import { Route } from "react-router-dom";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Router from "./router/Router";
import { LoadingBarContainer } from "react-top-loading-bar";

const App = () => {
  return (
    <LoadingBarContainer>
      <main className="font-clash w-full h-dvh">
        <Header />
        <Router />
      </main>
    </LoadingBarContainer>
  );
};

export default App;
