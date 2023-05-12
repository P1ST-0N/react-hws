import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout/Layout";

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route>
            <Route />
            <Route />
          </Route>
          <Route />
        </Routes>
      </Suspense>
    </Layout>
  );
};
