import React, { useRef } from "react";

import Rows from "./Rows";

function BoxEvents({ rowsOfSquares, selectedSquares, setSelectedSquares }) {
  const SquareMouseRef = useRef({
    mouseDown: false,
  });

  const onMouseDownSquare = (e) => {
    if (e.target.className === "Square") {
      SquareMouseRef.current.mouseDown = true;
      var targetsquareID = JSON.parse(e.target.dataset.squaredata).squareID;
      if (selectedSquares.includes(targetsquareID)) {
        var newSelectedSquares = selectedSquares.filter(
          (selsquareID) => selsquareID !== targetsquareID
        );
        setSelectedSquares(newSelectedSquares);
      } else {
        setSelectedSquares([...selectedSquares, targetsquareID]);
      }
    }
  };

  const onMouseEnterSquare = (e) => {
    if (SquareMouseRef.current.mouseDown) {
      if (e.target.className === "Square") {
        debugger;

        var targetsquareID = JSON.parse(e.target.dataset.squaredata).squareID;

        if (selectedSquares.includes(targetsquareID)) {
          var newSelectedSquares = selectedSquares.filter(
            (selsquareID) => selsquareID !== targetsquareID
          );

          setSelectedSquares(newSelectedSquares);
        } else {
          setSelectedSquares([...selectedSquares, targetsquareID]);
        }
      }
    }
  };

  const onMouseUpSquare = (e) => {
    if (e.target.className === "Square") {
      SquareMouseRef.current.mouseDown = false;
    }
  };

  return (
    <div
      className="RowsContainer"
      onMouseDown={onMouseDownSquare}
      onMouseUp={onMouseUpSquare}
    >
      {rowsOfSquares &&
        rowsOfSquares.map((row) => (
          <Rows
            rowSquares={row}
            onMouseEnterSquare={onMouseEnterSquare}
            selectedSquares={selectedSquares}
          />
        ))}
    </div>
  );
}

export default BoxEvents;
