import * as s from './styles'

export type PokemonCardProps = {
  name: string;
  id: number;
  height: number;
  attack: number;
  gameCount: number;
  image: string;
};

export const PokeCard = ({
  name,
  id,
  height,
  attack,
  gameCount,
  image,
}: PokemonCardProps) => {
  return (
    <div className={s.pokeCard}>
      <h1 className={s.pokeCard_h1}>{name}</h1>
      <img src={image} className={s.pokeCard_image} alt={`${name} pokemon sprite`} />
      <div className={s.pokeCard_text}>
        <p className={s.pokeCard_p}>Встречается в {gameCount} играх</p>
        <p className={s.pokeCard_p}>Id: {id}</p>
        <p className={s.pokeCard_p}>height: {height}</p>
        <p className={s.pokeCard_p}>attack: {attack}</p>
      </div>
    </div>
  );
};