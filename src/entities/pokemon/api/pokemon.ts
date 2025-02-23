import axios from 'axios'
import type { Pokemon } from '../model/pokemon'

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
    return response.data.results
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export async function fetchPokemonById(pokemonId: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  const data = await response.json()

  return {
    name: data.name,
    imageUrl: data.sprites.front_default,
    height: data.height,
    gameCount: data.game_indices.length,
    attack: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
    id: data.id,
  }
}
