import React from "react";
import styled from 'styled-components';
import { socialMedia } from 'config';
const Footer = () => {
    const FooterStyles = styled.section`
    $color-white: #FFFBFA;

    $color-black: #191308;

    .wrapper {
        position: fixed;
        bottom: 0px;
        padding: 0 0 30px 42px;
        transition: all .4s ease-out;
    
        &__links {
            display: block;
            width: 50%;
            }
    }

    .social-link {
        &--linkedin {
            color: #2d76b0;
        }

        &--github {
            color: var(--Green);
        }

        &--instagram {
            color: #9a2970;
        }

        & .social-svg {
            width: 2.2rem;
            height: 2.8rem;

            & .social-group {

            &__icon {
                fill: ${({ theme }) => theme.icon};
                transition: all .2s;
            }

            &__inner-circle {
                fill: transparent;
                transition: all .2s;
            }

            &__outline {
                stroke: ${({ theme }) => theme.icon};
                transform-origin: 50% 50%;
                transition: all .2s;
            }
        }

        &:hover, &:active, &:focus {
            & .social-group {

            &__icon {
                fill: ${({ theme }) => theme.iconHover};
                transition: all .45s;
            }

            &__inner-circle {
                fill: currentColor;
                transition: all .45s;

                &--instagram {
                fill: url(#simpleInsta) !important;
                }

            }

            &__outline {
                stroke: currentColor;
                transform: scale(1.1);
                transition: all .45s;
            }
        } 

    }

    }

    }

`;
const SocialMedia = socialMedia.map((social) => social);
    return (
        <FooterStyles>
            <div className="wrapper">
            <div className="wrapper__links">
                <a className="social-link social-link--github" id="github" href={SocialMedia[0].url} target="_blank" rel="noreferrer noopener">
                    <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        github
                    </title>
                    <g className="social-group" fill="none" fillRule="evenodd">
                        <circle className="social-group__outline" stroke="#000" strokeWidth="20" cx="300" cy="300" r="262.5" />
                        <circle className="social-group__inner-circle" fill="#000" cx="300" cy="300" r="252.5" />
                        <path className="social-group__icon" d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
                        fill="#000" fillRule="nonzero" />
                    </g>
                    </svg>
                </a>
                <a className="social-link social-link--linkedin" id="linkedin" href={SocialMedia[1].url} target="_blank" rel="noreferrer noopener">
                    <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        linkedin
                    </title>
                    <g className="social-group" fill="none" fillRule="evenodd">
                        <circle className="social-group__outline" stroke="#000" strokeWidth="20" cx="300" cy="300" r="262.5" />
                        <circle className="social-group__inner-circle" fill="#2D76B0" cx="300" cy="300" r="252.5" />
                        <path className="social-group__icon" d="M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z"
                        fill="#000" fillRule="nonzero" />
                    </g>
                    </svg>
                </a>
                <a className="social-link social-link--instagram" id="instagram" href={SocialMedia[2].url} target="_blank" rel="noreferrer noopener">
                    <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        instagram
                    </title>
                    <defs>
                        <linearGradient x1="0%" y1="100%" y2="0%" id="simpleInsta">
                        <stop stopColor="#D72F3F" offset="0%" />
                        <stop stopColor="#4221B9" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g className="social-group" fill="none" fillRule="evenodd">
                        <circle className="social-group__outline" stroke="#000" strokeWidth="20" cx="300" cy="300" r="262.5" />
                        <circle className="social-group__inner-circle social-group__inner-circle--instagram" fill="url(#simpleInsta)" cx="300" cy="300"
                        r="252.5" />
                        <path className="social-group__icon" d="M436.8577 205.4154c-3.6808-9.4808-8.5885-17.5116-16.6192-25.5423-8.0308-8.0308-16.0616-12.9385-25.5423-16.6193-9.1462-3.5692-19.7424-6.023-35.0231-6.6923-15.3923-.6692-20.3-.8923-59.5616-.8923-39.2615 0-44.1692.1116-59.5615.8923-15.3923.6693-25.877 3.1231-35.023 6.6923-9.4808 3.6808-17.5116 8.5885-25.5424 16.6193-8.0308 8.0307-12.9384 16.0615-16.6192 25.5423-3.5692 9.1461-6.023 19.7423-6.6923 35.023-.6693 15.3924-.8923 20.3-.8923 59.5616 0 39.2615.1115 44.1692.8923 59.5615.6692 15.3923 3.123 25.877 6.6923 35.0231 3.6808 9.4808 8.5884 17.5116 16.6192 25.5423 8.0308 8.0308 16.0616 12.9385 25.5423 16.6193 9.1462 3.5692 19.7423 6.023 35.0231 6.6923 15.3923.6692 20.3.8923 59.5615.8923 39.2616 0 44.1693-.1116 59.5616-.8923 15.3923-.6693 25.8769-3.1231 35.023-6.6923 9.4808-3.6808 17.5116-8.5885 25.5424-16.6193 8.0307-8.0307 12.9384-16.0615 16.6192-25.5423 3.5692-9.1461 6.023-19.7423 6.6923-35.023.6692-15.3924.8923-20.3.8923-59.5616 0-39.2615-.1115-44.1692-.8923-59.5615-.6692-15.3923-3.123-25.877-6.6923-35.0231zm-19.2962 152.9192c-.6692 14.0539-3.0115 21.75-5.0192 26.7692-2.5654 6.6924-5.8 11.6-10.8192 16.6193-5.0193 5.0192-9.8154 8.1423-16.6193 10.8192-5.1307 2.0077-12.7153 4.35-26.7692 5.0192-15.2808.6693-19.7423.8923-58.3346.8923s-43.1654-.1115-58.3346-.8923c-14.0539-.6692-21.75-3.0115-26.7692-5.0192-6.6924-2.5654-11.6-5.8-16.6193-10.8192-5.0192-5.0193-8.1423-9.8154-10.8192-16.6193-2.0077-5.1307-4.35-12.7153-5.0192-26.7692-.6693-15.2808-.8923-19.8538-.8923-58.3346s.1115-43.1654.8923-58.3346c.6692-14.0539 3.0115-21.75 5.0192-26.7692 2.5654-6.6924 5.8-11.6 10.8192-16.6193 5.0193-5.0192 9.8154-8.1423 16.6193-10.8192 5.1307-2.0077 12.7153-4.35 26.7692-5.0192 15.2808-.6693 19.8538-.8923 58.3346-.8923s43.1654.1115 58.3346.8923c14.0539.6692 21.75 3.0115 26.7692 5.0192 6.6924 2.5654 11.6 5.8 16.6193 10.8192 5.0192 5.0193 8.1423 9.8154 10.8192 16.6193 2.0077 5.1307 4.35 12.7153 5.0192 26.7692.6693 15.2808.8923 19.8538.8923 58.3346s-.223 43.1654-.8923 58.3346zM300 225.827c-40.9346 0-74.173 33.2385-74.173 74.1731s33.2384 74.173 74.173 74.173 74.173-33.2384 74.173-74.173-33.2384-74.173-74.173-74.173zm0 122.3577c-26.5462 0-48.1846-21.527-48.1846-48.1846 0-26.5462 21.527-48.1846 48.1846-48.1846 26.6577 0 48.1846 21.527 48.1846 48.1846 0 26.5462-21.6384 48.1846-48.1846 48.1846zm77.073-107.9692c-9.548 0-17.2884-7.7403-17.2884-17.2885 0-9.5481 7.7403-17.2884 17.2885-17.2884 9.5481 0 17.2884 7.7403 17.2884 17.2884 0 9.5482-7.7403 17.2885-17.2884 17.2885z"
                        fill="#000" fillRule="nonzero" />
                    </g>
                    </svg>
                </a>
            </div>
            </div>
            </FooterStyles>
    );
}

export default Footer;






