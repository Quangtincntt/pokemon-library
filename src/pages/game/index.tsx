import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import "./index.css";

// Pokemon
import PokemonCollection from "./Components/Pokemon/PokemonCollection";
import { pokemon } from "./../../interface";

interface Pokemons {
  name: string;
  url: string;
}

export interface Detail {
  id: number;
  isOpened: boolean;
}

const Game: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemon] = useState<pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [viewDetail, setDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });

  //load Pokemon
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
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
    }, 4000);
  }, []);

  // Load more Pokemon
  const loadMore = async () => {
    setLoading(true);
    setTimeout(() => {
      async function toggle() {
        try {
          let res = await axios.get(nextUrl);
          setNextUrl(res.data.next);
          res.data.results.forEach(async (pokemon: Pokemons) => {
            const poke = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            setPokemon((p) => [...p, poke.data]);
            setLoading(false);
          });
        } catch (error) {
          console.error(error);
        }
      }
      toggle();
    }, 4000);
  };

  return (
    <Box>
      <PokemonCollection
        pokemons={pokemons}
        viewDetail={viewDetail}
        setDetail={setDetail}
      />
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <button onClick={loadMore} className="btn-loadmore">
          Load More
        </button>
      )}
    </Box>
  );
};

export default Game;
