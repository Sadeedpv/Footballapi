import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Standings from "./components/Standings";
import Highlights from "./components/Highlights";
import Button from "./components/Button";
import Transfer from "./components/Transfer";

function App() {
  return (
    <>
    <Navigation />
    <Button />
    <Header />
    <Standings />
    <Transfer />
    <Highlights />
    </>
  );
}

export default App;
