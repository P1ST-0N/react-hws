import React from "react";
import { Route, Routes } from "react-router-dom";
import { Lazy, Suspense } from "react";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route />
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
