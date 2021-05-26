import React, { useState, useEffect } from "react";
import ThemeToggler from 'Styles/Themes/ThemeToggler';
import LogoList from 'Content/LogoList';
import { navLinks } from 'config';
import styled from 'styled-components';
import { debounce } from 'Utilities/debounce';
import Button from 'Utilities/Button';
const Navigation = (props) => {
    const logo = props.theme === 'light' ? LogoList[0].img : LogoList[1].img;

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

    const StyledNavItem = styled.div`
        .logo {
            float: left;
        }

        .navItem{
            float: right;
            margin-top: 8px; 
            li{
                color: ${({ theme }) => theme.Btn};
                & :hover{
                    color: ${({ theme }) => theme.BtnHover};
                }
                font-family: var(--font-primary);
                display: inline-block;
                padding: 8px;
                font-size: 14px;
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

    const navbarStyles = {
        position: 'fixed',
        height: '70px',
        width: '100%',
        transition: 'top 0.3s',
        padding: '0 30px 0 30px',
        overflow: 'hidden',
        zIndex: '99'
    }
    return (
        <div style={{ ...navbarStyles, 
            top: visible ? '0' : '-70px', 
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
                        <Button url='/resume.pdf'>Resume</Button>
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