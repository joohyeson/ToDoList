import "./App.css";
import "./styleguide.css"
import "./globals.css"
import React from "react";
import Todo from "./Todo";


function App() {
  return (
    <div>
      <Todo {...todoData} />
    </div>
  );
}

export default App;
const todoData = {
  overlapGroup: "/img/rectangle-1@2x.svg",
  todo: "Todo",
  overlapGroup1: "/img/rectangle-2@2x.svg",
  routine: "Routine",
  overlapGroup2: "/img/rectangle-3@2x.svg",
  event: "Event",
  overlapGroup3: "/img/rectangle-4@2x.svg",
  checklist: "Checklist",
  text1: "2021.08.09 (월)",
  text: "TEXT",
  line5: "/img/line-5@1x.svg",
  text2: "+",
};
