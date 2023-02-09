import React from "react";
import { pokemon } from "../../../../interface";
import PokemonList from "./PokemonList";
import { SimpleGrid, Box } from "@chakra-ui/react";

import "./pokemon.css";
interface Props {
  pokemons: pokemon[];
}
const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <div className="wrapper">
      <p className="heading">Pokemon</p>
      <SimpleGrid minChildWidth="150px" spacing="70px">
        {pokemons.map((poke, index) => {
          const { id, name, sprites } = poke;
          return (
            <Box key={index} w="100%" h="120">
              <div className="pokemon-item">
                <PokemonList
                  id={id}
                  key={id}
                  name={name}
                  image={sprites.front_default}
                />
              </div>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default PokemonCollection;
