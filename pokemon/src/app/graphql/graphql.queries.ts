import { gql } from 'apollo-angular';

const app = gql`
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

export { app };
