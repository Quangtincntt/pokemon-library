import React from "react";
import "./pokemon.css";
import { Detail } from "./../../index";
import { useState, useEffect } from "react";
interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities:
    | {
        name: string;
        abilities: string;
      }[]
    | undefined;
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { id, name, image, abilities, viewDetail, setDetail } = props;
  useEffect(() => {
    setIsSelected(id === viewDetail?.id);
  }, [viewDetail]);

  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpened: false,
    });
  };
  return (
    <div>
      {isSelected ? (
        <div className="bg-overlay">
          <div className="modal">
            <p onClick={closeDetail} className="action">
              X
            </p>
            <img className="modal-img" src={image} alt="" />
            <p>{name}</p>
            {abilities?.map((ab: any, index) => {
              const { name } = ab.ability;
              return (
                <p className="ability" key={index}>
                  Ability: {name}
                </p>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      <p> {name} </p>
      <img src={image} alt="pokemon" />
    </div>
  );
};

export default PokemonList;
