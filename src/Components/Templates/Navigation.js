import React, { useState, useEffect } from "react";
import ThemeToggler from 'Styles/Themes/ThemeToggler';
import { navLinks } from 'config';
import styled from 'styled-components';
import { debounce } from 'Utilities/debounce';
import Button from 'Utilities/TempButton';
import logo_light from 'Content/Images/logo_light.png';
import logo_dark from 'Content/Images/logo_dark.png';
import resume from 'resume.pdf';
const StyledNavItem = styled.div`
        .logo {
            float: left;
        }

        .navItem{
            float: right;
            margin-top: 0.5rem; 
            li{
                color: ${({ theme }) => theme.Btn};
                & :hover{
                    color: ${({ theme }) => theme.BtnHover};
                }
                font-family: var(--font-primary);
                display: inline-block;
                padding: 0.5rem;
                font-size: 0.875rem;
                -webkit-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
                a {
                    text-decoration: none;
                }
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    `;

const Navigation = (props) => {
    const logo = props.theme === 'light' ? logo_light : logo_dark;

    // Hide Nav bar when scrolling 
    const [ prevScrollPos, setPrevScrollPos ] = useState(0);
    const [ visible, setVisible] = useState(true);
    const handleScroll = debounce(() => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;
        // set state based on location info
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 10);
        //set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    }, 50);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    
    const navbarStyles = {
        position: 'fixed',
        height: '4.375rem',
        width: '100%',
        transition: 'top 0.3s',
        padding: '0 1.875rem 0 1.875rem',
        overflow: 'hidden',
        zIndex: '99'
    }
    return (
        <div style={{ ...navbarStyles, 
            top: visible ? '0' : '-4.375rem', 
            background: props.theme === 'light' ? 'var(--Light)' : 'var(--Dark)'}}>
            <StyledNavItem>
                <a className='logo' href='#hero'>
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        alt="logo"
                    />
                </a>
                <ul className='navItem'>
                    {navLinks && navLinks.map(({name, url}, i) => (
                        <li key={i}>
                            <a href={url}>{name}</a>
                        </li>
                    ))}
                    <li>
                        <Button url={resume}>Resume</Button>
                    </li>
                    <li>
                        <ThemeToggler theme={props.theme} toggleTheme={props.toggleTheme}/>
                    </li>
                </ul>
            </StyledNavItem>
        </div>
    );

        




}


export default Navigation;