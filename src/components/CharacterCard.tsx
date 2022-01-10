import { Container } from "../styles/CharacterCardStyle";

export interface ICharacterCardProps {
  name: string;
  species: string;
  gender: string;
  image: string;
  status: string;
  id: number;
}

export function CharacterCard(props: ICharacterCardProps) {
  const { name, species, gender, image, status } = props;
  const isDead = status === "Dead";

  return (
    <Container isDead={isDead}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </div>
    </Container>
  );
}
