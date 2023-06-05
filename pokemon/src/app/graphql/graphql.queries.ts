import { gql } from 'apollo-angular';

export const GET_ALL = gql`
  query pokemonAbilitiesAPIquery {
    pokemon_v2_pokemon {
      id
      name
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

export const Filter_Pokemon = gql`
  query teste($pokeName: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $pokeName } }) {
      id
      name
    }
  }
`;
