import { Route, Routes } from "react-router";
import { Lazy, Suspense } from "react";

export const App = () => {
  return (
    <>
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
    </>
  );
};