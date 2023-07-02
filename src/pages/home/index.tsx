import CharactersList from "../../components/CharactersList";
import { ContainerLeftRigth } from "../home/styles";
import { ConatinerApp } from "../home/styles";
import { BoxImage } from "../home/styles";
import marvelLogo from "../../assets/images/marvel-logo.png";
import SearchCharacter from "../../components/RatingCharacter";

const Home = () => {
  return (
    <ConatinerApp>
      <BoxImage>
        <img src={marvelLogo} alt="marvel logo" />
      </BoxImage>
      <ContainerLeftRigth>
        <CharactersList />
        <SearchCharacter />
      </ContainerLeftRigth>
    </ConatinerApp>
  );
};

export default Home;