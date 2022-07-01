import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Standings from "./components/Standings";

function App() {
  return (
    <>
    <Navigation />
    <Header />
    <Standings />
    </>
  );
}

export default App;
