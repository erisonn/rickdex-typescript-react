import { useFetch } from './hooks/useFetch';
import { ICharacterCardProps, CharacterCard } from './components/CharacterCard';
import { Container, Title } from './styles/Home'

function App() {

  const { loading, error, data } = useFetch('https://rickandmortyapi.com/api/character')

  const character = data?.results as ICharacterCardProps[]

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <Title>
        <h1>Rickdex</h1>
      </Title>
      <Container>
        {character?.map(character =>
          <CharacterCard
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
            id={character.id}
          />
        )}
        </Container>
    </>
  );
}

export default App;
