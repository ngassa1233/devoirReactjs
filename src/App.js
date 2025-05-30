import React from "react";
import MaPresentationPersonnelle from "./components/MaPresentationPersonnelle";
import InformationCours from "./components/InformationCours";
import '../src/App.css'
const App =() => {
  const dateAujourdhui = new Date().toLocaleDateString();
  return(
    <div className="app-container">
      <h1>Mon Premier Project React</h1><MaPresentationPersonnelle/>
      <InformationCours /><footer>Fait le {dateAujourdhui}</footer>
    </div>
  );
};
export default App;
