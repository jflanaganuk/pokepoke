import React, { useState } from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { PokemonNames } from "./components/PokemonNames/PokemonNames";
import { Pagination } from "./components/Pagination/Pagination";

const uri = "https://beta.pokeapi.co/graphql/v1beta";

const client = new ApolloClient({
  link: ApolloLink.from([
    new ApolloLink((operation, forward) => {
      operation.setContext(() => ({
        uri: `${uri || ""}?${operation.operationName}`,
      }));
      return forward ? forward(operation) : null;
    }),
    new HttpLink({ uri }),
  ]),
  cache: new InMemoryCache(),
});

function App() {
  const [page, setPage] = useState(0);
  return (
    <div>
      <h2>Pokemon Names: 🚀</h2>
      <PokemonNames currentPage={page} />
      <Pagination setCurrentPage={setPage} currentPage={page} totalPages={10} />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
