import React from "react";

const List = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((pokemon) => (
        <div key={pokemon}>{pokemon}</div>
      ))}
    </div>
  );
};

export default List;
