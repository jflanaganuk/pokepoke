import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
  ApolloProvider,
  useQuery,
  ApolloLink
} from "@apollo/client";
import { samplePokeAPIquery } from "./__generated__/samplePokeAPIquery";

const uri = "https://beta.pokeapi.co/graphql/v1beta";

const client = new ApolloClient({
  link: ApolloLink.from([
       new ApolloLink((operation, forward) => {
          operation.setContext(() => ({
            uri: `${uri || ''}?${operation.operationName}`,
          }));
          return forward ? forward(operation) : null;
        }),
      new HttpLink({ uri })
    ]),
  cache: new InMemoryCache(),
});

const POKEMON_NAMES = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemonspecies {
      name
    }
  }
`;

function PokemonNames() {
  const { loading, error, data } = useQuery(POKEMON_NAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const results: samplePokeAPIquery = data;
  return (
    <div>
      {results.pokemon_v2_pokemonspecies.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Pokemon Names: 🚀</h2>
      <PokemonNames />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
