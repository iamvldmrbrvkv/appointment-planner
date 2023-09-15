import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles?.map((tile, i) => {
        const { name, ...description } = tile;
        return <Tile name={name} description={description} key={i} />
      })}
    </div>
  );
};
