import React from "react";
import './App.css'
import MaPresentationPersonnelle from "./components/MaPresentationPersonnelle";
import InformationCours from "./components/InformationCours";
import CarteProfil from "./components/CarteProfil"
const App = () => {
  const dateAujourdhui =new Date().toLocaleDateString();
  return(
    <div className="app-container"><h1>Mon Premier Project React</h1>
          <MaPresentationPersonnelle/>
          <InformationCours/>
          <CarteProfil/>
          <footer>Fait le {dateAujourdhui}</footer>
    </div>
  );
};
export default App;
