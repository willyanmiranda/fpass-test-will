import { useState, useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import { Link } from "react-router-dom";
import {
  ContainerCharacter,
  ImageItemStyled,
  NameAndImage,
  NameSumary,
} from "./styles";

interface ICharacterItemProps {
  nameItem: string;
  descriptionItem: string;
  imageItem: string;
}

const CharacterItem: React.FC<ICharacterItemProps> = ({
  nameItem,
  descriptionItem,
  imageItem,
}) => {
  const [isDoneDetails, setIsDoneDetails] = useState<boolean>(false);

  const { setCharacterName, setCharacterDescription, setCharacterImg } = useContext(CharactersContext)

  const handleIsDone = () => {
    if (!isDoneDetails) {
      setIsDoneDetails(true);
      setCharacterName(nameItem)
      setCharacterDescription(descriptionItem)
      setCharacterImg(imageItem)
    } else {
      setIsDoneDetails(false);
    }
  };

  return (
    <ContainerCharacter>
      <NameAndImage>
        <ImageItemStyled src={imageItem} alt={`image ${nameItem}`} />
          <NameSumary>
          <p>{nameItem}</p>
          {descriptionItem.length > 0 && (
            <Link to="/description"><summary onClick={handleIsDone}>Descrição</summary></Link>
          )}
        </NameSumary>
      </NameAndImage>
      {descriptionItem.length > 0 && (
        <>
          <details open={isDoneDetails}>
            <summary>{""}</summary>
            <span>{descriptionItem}</span>
          </details>
        </>
      )}
    </ContainerCharacter>
  );
};

export default CharacterItem;
