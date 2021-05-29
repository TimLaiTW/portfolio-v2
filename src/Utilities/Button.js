import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
    const StyledEmailLink = styled.div`
    .button {
        text-decoration: none;
        display: inline-block;
        padding: 0.5rem 1.25rem;
        border-radius: .3rem;
        color: ${({ theme }) => theme.Btn};
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: .15rem;
        transition: all .5s;
        position: relative;
        overflow: hidden;
        z-index: 1;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: 0.08rem solid ${({ theme }) => theme.Btn};
            border-radius: 0.3rem;
            z-index: -2;
        }
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: ${({ theme }) => theme.Btn};
            transition: all 0.5s;
            border-radius: 0.3rem;
            z-index: -1;
        }
        &:hover {
            color: #fff;
            &:before {
                width: 100%;
            }
        }
    }
    
    

    `;
    return (
        <StyledEmailLink>
            <a className='button' hrerf={props.url}>{props.children}</a>
        </StyledEmailLink>
    )
};
export default Button;