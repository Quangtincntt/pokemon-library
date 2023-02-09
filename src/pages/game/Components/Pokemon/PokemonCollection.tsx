import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

import { PokemonDetail } from "../../../../interface";
import { Detail } from "./../../index";
import PokemonList from "./PokemonList";

import "./pokemon.css";
interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setDetail } = props;

  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpened) {
      setDetail({
        id: id,
        isOpened: true,
      });
    }
  };
  return (
    <div className="wrapper">
      <p className="heading">Pokemon</p>
      <SimpleGrid minChildWidth="150px" spacing="70px">
        {pokemons.map((poke, index) => {
          const { id, name, sprites } = poke;
          return (
            <Box key={index} w="100%" h="120">
              <div onClick={() => selectPokemon(id)} className="pokemon-item">
                <PokemonList
                  setDetail={setDetail}
                  viewDetail={viewDetail}
                  abilities={poke.abilities}
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
