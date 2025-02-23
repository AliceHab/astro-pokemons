import React from 'react'
import { useStore } from '@nanostores/react'
import { $pokemons, loadPokemons } from '../../entities/pokemon/stores/pokemons'
import { Chip } from '../../shared/ui/Chip/Chip'
import { css } from '@linaria/core'

export const chipContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 6px;
  width: 50%;
  align-content: flex-start;
  margin-top: auto;
  margin-bottom: auto;
`

export const PokemonsList = ({ activePokemonName }: { activePokemonName?: string }) => {
  React.useEffect(() => {
    loadPokemons()
  }, [])

  const pokemons = useStore($pokemons)

  return (
    <div className={chipContainer}>
      {pokemons.map((pokemon) => (
        <Chip
          key={pokemon.name}
          chipTitle={pokemon.name}
          isActive={activePokemonName === pokemon.name}
        />
      ))}
    </div>
  )
}
