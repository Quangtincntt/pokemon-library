import React from "react";
interface Props {
  name: string;
  id: number;
  image: string;
}
const PokemonList: React.FC<Props> = (props) => {
  const { name, image } = props;

  return (
    <div>
      <p> {name} </p>
      <img src={image} alt="pokemon" />
    </div>
  );
};

export default PokemonList;
