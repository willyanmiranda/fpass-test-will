import React from 'react'
import { useState, useContext } from 'react';
import Thumbnail from '../../components/thumbnail'
import { CharacterName, CharacterLine, CharacterBody, CharacterTitle, CharacterText } from './style'
import { CharactersContext } from "../../contexts/CharactersContext";

const DescriptionCharacter = () => {

  const { characterName, characterDescription, characterImg } = useContext(CharactersContext)

  return (
    <>
    <Thumbnail img={characterImg} />
    <div>
        <CharacterName>{characterName}</CharacterName>
        <CharacterLine></CharacterLine>
        <CharacterBody>
            <ul>
                <li>
                    <CharacterTitle>Descrição</CharacterTitle>
                    <CharacterText>{characterDescription}</CharacterText>
                </li>
            </ul>
        </CharacterBody>
    </div>
    </>
  )
}

export default DescriptionCharacter