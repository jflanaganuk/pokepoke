import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { PokemonNamesWrapper } from "./components/PokemonNames/PokemonNamesWrapper";
import { Pagination } from "./components/Pagination/Pagination";
import "./app.scss";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { PokemonDetailWrapper } from "./components/PokemonDetail/PokemonDetailWrapper";

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

function Home() {
  const { pageId }: { pageId: number | undefined } = useParams();
  const page = Number(pageId || 0);
  return (
    <div>
      <h1>Pokemon Database</h1>
      <Pagination currentPage={page} totalPages={18} />
      <PokemonNamesWrapper currentPage={page} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:id">
          <PokemonDetailWrapper />
        </Route>
        <Route path="/:pageId">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
