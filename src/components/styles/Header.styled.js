import styled from "styled-components";

export const StyledHeader = styled.header `
    color: ${({theme}) => theme.tagLineColor};
    margin: auto;
`;

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    margin:-2% auto;
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    border:1px solid black;

    ul {
        display: inline-flex;
        justify-content: space-evenly;
        margin: 0px auto;
        width: 100vw;
        border:1px solid blue;

    }
 
    ul li {        
        text-decoration: none;
        list-style: none;
        border:1px solid green;
    }

`

export const Main = styled.main `
    
`;