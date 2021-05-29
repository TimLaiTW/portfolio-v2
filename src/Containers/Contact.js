import React from "react";
import Button from 'Utilities/Button';
import styled from 'styled-components';
import { email } from 'config';
const Contact = (props) => {
    const theme = props.theme;
    const StyledContactSection = styled.section`
    header {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-content {
        margin-left: auto;
        margin-right: auto;
        width: 20rem;
    }

    .email-btn {
        left: 50%;
        top: 50%;
        transform: translate(15%, 0%);
    }

    .wave {
        animation-name: wave-animation;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
      }
      
      @keyframes wave-animation {
          0% { transform: rotate( 0.0deg) }
         10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
         20% { transform: rotate(-8.0deg) }
         30% { transform: rotate(14.0deg) }
         40% { transform: rotate(-4.0deg) }
         50% { transform: rotate(10.0deg) }
         60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
        100% { transform: rotate( 0.0deg) }
      }
    `;

    const EmailUrl = "mailto:" + email;
    return (
        <StyledContactSection>

            {/* anchor offset */}
            <a className='anchor' id='contact'>contact</a>  
            {/* anchor offset */}
            
            <div className='pages-content'>
                <header>Get In Touch</header>
                <div className='contact-content'>
                    <p>Feel free to shoot me an email.</p>
                    <div className='email-btn'>
                        <Button url={EmailUrl} theme={theme}>
                            Say Hello <span class="wave">👋</span>
                        </Button>
                    </div>
                </div>
            </div>
        </StyledContactSection>
    );
}
export default Contact;