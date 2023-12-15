import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.jsx";

import injectContext from "./store/appContext";

import { Home } from "./views/Home.jsx";
import { RecipePage } from "./views/Recipe.jsx";

import { NavBar } from "./component/NavBar.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:recipe_id" element={<RecipePage />} />
          </Routes>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
