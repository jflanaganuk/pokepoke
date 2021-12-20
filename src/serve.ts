import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, gql, HttpLink } from "@apollo/client";
import { samplePokeAPIquery } from './__generated__/samplePokeAPIquery';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://beta.pokeapi.co/graphql/v1beta', fetch }),
    cache: new InMemoryCache(),
});

client.query({
    query: gql`
        query samplePokeAPIquery {
            pokemon_v2_pokemonspecies {
                name
            }
        }
    `
}).then((results: {data: samplePokeAPIquery}) => {
    results.data.pokemon_v2_pokemonspecies.map(pokemon => console.log(pokemon.name))
})

