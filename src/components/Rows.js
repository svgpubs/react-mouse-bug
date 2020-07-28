import React from "react";
import Square from "./Square";

function Rows({ rowSquares, selectedSquares, onMouseEnterSquare }) {
  return (
    <div key={rowSquares[0].squareID} className="plateRow">
      {rowSquares &&
        rowSquares.map((square) => {
          return (
            <Square
              isSelected={selectedSquares.includes(square.squareID)}
              squaredata={square}
              onMouseEnterSquare={onMouseEnterSquare}
            />
          );
        })}
    </div>
  );
}

export default Rows;
