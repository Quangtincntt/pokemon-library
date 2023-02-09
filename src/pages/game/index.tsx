import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import "./index.css";

// Pokemon
import PokemonCollection from "./Components/Pokemon/PokemonCollection";
import { pokemon } from "./../../interface";

interface Pokemons {
  name: string;
  url: string;
}

const Game: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemon] = useState<pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  useEffect(() => {
    async function getPokemon() {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20offset=20"
        );
        setNextUrl(res.data.next);

        res.data.results.forEach(async (pokemon: Pokemons) => {
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}          `
          );
          setPokemon((p) => [...p, poke.data]);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    }
    getPokemon();
  }, []);

  //Load more Pokemon
  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemon((p) => [...p, poke.data]);
      setLoading(false);
    });
  };
  return (
    <Box>
      <PokemonCollection pokemons={pokemons} />
      {loading ? (
        <Button isLoading colorScheme="blue">
          Click me
        </Button>
      ) : (
        <button className="btn-loadmore" onClick={nextPage}>
          Load More
        </button>
      )}
    </Box>
  );
};

export default Game;
