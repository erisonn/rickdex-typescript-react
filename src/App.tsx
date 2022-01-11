import * as React from "react";
import { useFetch } from "./hooks/useFetch";
import { ICharacterCardProps, CharacterCard } from "./components/CharacterCard";
import { IFilters, Filter } from "./components/Filter";
import { Container, Title } from "./styles/Home";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const defaultFilters = {
    search: "",
    gender: "",
    status: "",
  };

  const [filters, setFilters] = React.useState<IFilters>(defaultFilters);
  const filteredUrl = `https://rickandmortyapi.com/api/character/?gender=${filters.gender}&status=${filters.status}&name=${filters.search}`;

  const { error, data, next, loadMore } = useFetch(filteredUrl);

  const characterData = data as ICharacterCardProps[];

  const loaderMessage = characterData?.length
    ? "Yay! You have seen it all."
    : "Oops! Nothing found.";

  const handleInfiniteScroll = () => {
    setTimeout(() => {
      loadMore(next);
    }, 1000);
  };

  if (error) return <p>Error!</p>;

  return (
    <>
      <Title>Rick and Morty - Characters</Title>
      <Filter filters={filters} setFilters={setFilters} />
      <InfiniteScroll
        next={() => handleInfiniteScroll()}
        dataLength={characterData?.length ?? 0}
        hasMore={typeof next === "string"}
        loader={<p>Loading...</p>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>{loaderMessage}</b>
          </p>
        }
      >
        <Container>
          {characterData?.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              status={character.status}
              id={character.id}
            />
          ))}
        </Container>
      </InfiniteScroll>
    </>
  );
}

export default App;
