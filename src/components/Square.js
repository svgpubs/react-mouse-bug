import React from "react";

const Square = ({ isSelected, squaredata, onMouseEnterSquare }) => {
  return (
    <div
      style={{ backgroundColor: isSelected ? "blue" : "grey" }}
      className="Square"
      key={squaredata.squareID}
      data-squaredata={JSON.stringify(squaredata)}
      onMouseEnter={onMouseEnterSquare}
    ></div>
  );
};

export default Square;
