import styled from "styled-components";

export const CharacterName = styled.div`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 3.4rem;
    font-weight: 500;
    margin-top: -1.2rem;

    @media (max-width: 1000px){
        text-align: center;
        margin-top: 1.8rem;
    }
`;

export const CharacterLine = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    padding-bottom: 1.6rem;
    margin: 0.4rem 0;

    @media (max-width: 768px){
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
`;

export const CharacterBody = styled.div`
     margin-top: 3.6rem;

    @media (max-width: 768px){
        margin-right: 3rem;
    }
`;

export const CharacterTitle = styled.span`
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    color: #505050;
    margin: 1.6rem 0 1.6rem 2.5rem;
    position: relative;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 2px;
    margin-top: 3.6rem;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
                transform: translateY(-50%);
        left: -40px;
        height: 3px;
        width: 30px;
        background-color: #f2c10e;
    }
`;

export const CharacterText = styled.span`
    letter-spacing: 1px;
    line-height: 1.9;
`;