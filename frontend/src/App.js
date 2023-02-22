import "./App.css";
import Navbar from "./component/navbar/navbar";
import { getMatches } from "./api/api";
import { useEffect } from "react";
import MyCard from "./component/Card/myCard";
import { useState } from "react";
import { Typography } from "@mui/material";
function App() {
  const [matches, setMatch] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {setMatch(data.data) ;})
      .catch((err) => {
        console.log(err);
        alert(err + "could not load data");
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <h1 style={{animation:true , animationComposition:1}}>Match's</h1>
      {/* <p>{matches}</p> */}
      {matches.map((match) => (
        <MyCard match={match} />
      ))}{" "}
    </div>
  );
}

export default App;
