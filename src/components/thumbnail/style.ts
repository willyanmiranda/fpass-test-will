import styled from "styled-components";

export const AppThumbnail = styled.div`
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    justify-content: space-between;

    @media (max-width: 1000px){
        max-width: 400px;
        margin: 0 auto;
    }
`;

export const ThumbImg = styled.img`
    width: 100%;
    display: block;
`;