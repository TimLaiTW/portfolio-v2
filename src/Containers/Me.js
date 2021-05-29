import React from "react";
import Button from 'Utilities/Button';
import styled from 'styled-components';
import { email } from 'config';
const Me = () => {
    const StyledHeroSection = styled.section`
        * {
            max-width: 40.625rem;
            p {
                max-width: 21.875rem;
                font-weight: normal;
            }
            h1 {
                color: ${({ theme }) => theme.header};
            }
        }
    `;
    const EmailUrl = "mailto:" + email;
    return (
        <StyledHeroSection>

            {/* anchor offset */}
            <a className='anchor' id='hero'>me</a>  
            {/* anchor offset */}

            <div className='pages-content'>
                <p>Hi, my name is </p>
                <h1>Tim Lai.</h1>
                <h1>I build things for the web.</h1>
                <p>I'm a Taiwan-born software engineer who solves problems associated with creating digital products. </p>
                <Button url={EmailUrl}>
                    Get In Touch
                </Button>
            </div>
        </StyledHeroSection>    
    )
}
export default Me;