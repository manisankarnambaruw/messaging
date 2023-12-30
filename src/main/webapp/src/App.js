import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./component/PublicRoute";
const LandingPage = lazy(() => import("./pages/Landing"));
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const Rooms = lazy(() => import("./pages/Rooms"));
const Room = lazy(() => import("./pages/Room"));
import PrivateRoute from "./component/PrivateRoute";
import "./App.css";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback="loading...">
        <Router>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="" element={<LandingPage />} />
            </Route>

            <Route path="/app" element={<PrivateRoute />}>
              <Route path="" element={<Rooms />} />
              <Route path=":id" element={<Room />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ApolloProvider>
  );
}
