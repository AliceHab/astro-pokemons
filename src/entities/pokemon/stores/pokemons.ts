import { atom } from 'nanostores'
import type { Pokemon } from '../model/pokemon'
import { fetchPokemons } from '../api/pokemon'

export const $pokemons = atom<Pokemon[]>([])

export async function loadPokemons() {
  if (typeof window !== 'undefined') {
    const cachedPokemons = localStorage.getItem('pokemons')
    if (cachedPokemons) {
      $pokemons.set(JSON.parse(cachedPokemons))
    } else {
      const pokemons = await fetchPokemons()
      $pokemons.set(pokemons)
      localStorage.setItem('pokemons', JSON.stringify(pokemons))
    }
  } else {
    const pokemons = await fetchPokemons()
    $pokemons.set(pokemons)
  }
}
