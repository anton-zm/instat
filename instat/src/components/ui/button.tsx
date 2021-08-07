import styled from 'styled-components';

export const Button = styled.button<{margin?:string}>`
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    padding: 15px 45px;
    color: #c1c1c1;
    margin: ${(props) => props.margin};
    background-color: transparent;
`