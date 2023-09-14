import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((tile, i) => {
        const { name, ...description } = tile;
        <Tile name={name} description={description} key={i} />
      })}
    </div>
  );
};
