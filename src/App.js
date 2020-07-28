import React, { useCallback, useState } from "react";

import Box from "./components/Box";

import "./App.css";

function App() {
  const rowsOfSquares = [
    [
      { squareID: "A1", col: 1, row: "A", Squarenum: 1 },
      { squareID: "A2", col: 2, row: "A", Squarenum: 2 },
      { squareID: "A3", col: 3, row: "A", Squarenum: 3 },
      { squareID: "A4", col: 4, row: "A", Squarenum: 4 },
    ],
    [
      { squareID: "B1", col: 1, row: "B", Squarenum: 5 },
      { squareID: "B2", col: 2, row: "B", Squarenum: 6 },
      { squareID: "B3", col: 3, row: "B", Squarenum: 7 },
      { squareID: "B4", col: 4, row: "B", Squarenum: 8 },
    ],
    [
      { squareID: "C1", col: 1, row: "C", Squarenum: 9 },
      { squareID: "C2", col: 2, row: "C", Squarenum: 10 },
      { squareID: "C3", col: 3, row: "C", Squarenum: 11 },
      { squareID: "C4", col: 4, row: "C", Squarenum: 12 },
    ],
  ];

  const [selectedSquares, setSelectedSquares] = useState([]);

  const wrapSetSelectedSquares = useCallback(
    (squareIDs) => {
      setSelectedSquares(squareIDs);
    },

    [setSelectedSquares]
  );

  return (
    <div className="BoxEventsContainer">
      <div id="instructions">
        <div>To Reproduce Bug (at least on Chrome)</div>
        <ol>
          <li>Mouse down on upper left block</li>
          <li>Drag to the right with mouse still down</li>
          <li>Mouse up on upper right block </li>
          <ul>
            <li>top row should be blue</li>
          </ul>
          <li>Mouse down again on upper right block</li>
          <li>Drag back to the left</li>
          <ul>
            <li>The blocks *should* turn grey as you mouse back over</li>
            <li>
              Instead it looks like <b>the mouse listeners stop working.</b>{" "}
              Why?
            </li>
          </ul>
        </ol>
      </div>

      <Box
        rowsOfSquares={rowsOfSquares}
        selectedSquares={selectedSquares}
        setSelectedSquares={wrapSetSelectedSquares}
      />
    </div>
  );
}

export default App;
