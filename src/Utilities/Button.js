import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
    const StyledEmailLink = styled.div`
    .button {
        text-decoration: none;
        display: inline-block;
        padding: 0.5rem 1.25rem;
        border-radius: 5px;
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
            border: 1px solid ${({ theme }) => theme.Btn};
            border-radius: 5px;
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
            border-radius: 5px;
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
            <div class="box-1">
                <div class="btn btn-one">
                    <a className='button' hrerf={props.url}>{props.children}</a>
                </div>
            </div>
        </StyledEmailLink>
    )
};
export default Button;