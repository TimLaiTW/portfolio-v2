import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
    const StyledBtnLink = styled.div`
        a {
            font-family: var(--font-primary);
            display: inline-block;
            padding: 9px;
            font-size: 14px;
            border-radius: 4px;
            transition: all .2s ease-in-out;
            text-decoration: none;
            color: ${({ theme }) => theme.Btn};
            border: 1px solid ${({ theme }) => theme.Btn};
            &:hover {
                color: ${({ theme }) => theme.BtnHover};
                border: 1px solid ${({ theme }) => theme.BtnHover};               
            }
        }

    `;
    return (
        <StyledBtnLink>
            <a href={props.url} target="_blank" rel="noreferrer noopener">{props.children}</a>
        </StyledBtnLink>
    )
};
export default Button;