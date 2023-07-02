import styled from "styled-components";

export const MainWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
`;

export const App = styled.div`
    background-color: #0a0a0a;
    margin: 2rem;
    padding: 5rem;
    border-radius: 6px;
    color: #fff;
    -webkit-box-shadow: 0px 5px 11px 0px rgba(0, 0, 0, 0.5);
            box-shadow: 0px 5px 11px 0px rgba(0, 0, 0, 0.5);
`;

export const AppBody = styled.div`
   margin-top: 4rem;
   height: 600px;
`;

export const AppContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    -webkit-column-gap: 4rem;
       -moz-column-gap: 4rem;
            column-gap: 4rem;
    margin-right: 2rem;

    @media (max-width: 1200px){
    grid-template-columns: 1fr 3fr;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    }

    @media (max-width: 1000px){
        grid-template-columns: 1fr;
        row-gap: 4rem;
        max-width: 680px;
        margin-right: auto;
        margin-left: auto;
    }
`;
