import { gql } from 'apollo-angular';

export const GET_ALL = gql`
  query pokemonAbilitiesAPIquery {
    pokemon_v2_pokemon {
      id
      name
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export const GET_Search = gql`
  query GetPokemonById($pokeId: Int!) {
    pokemon_v2_pokemon_by_pk(id: $pokeId) {
      name
      id
    }
  }
`;
