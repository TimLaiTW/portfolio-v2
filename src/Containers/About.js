import React from "react";
import styled from 'styled-components';
const StyledAboutSection = styled.section`
        span {
            color: ${({ theme }) => theme.header};
            font-family: var(--font-mainContent);
            font-weight: 900;
        }

        ul.skills-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(8.75rem, 12.5rem));
            padding: 0;
            margin: 0.625rem 0 0 0;
            overflow: hidden;
            list-style: none;
            li {
                position: relative;
                margin-bottom: 0.625rem;
                padding-left: 1.25rem;
                &:before {
                    content: '▹';
                    position: relative;
                    right: 0.625rem;
                    line-height: 0.75rem;
                    }
            }

            li:before {
                color: ${({ theme }) => theme.header};
            }
        }
    `;
const About = () => {

    const skills = ['JavaScript (ES6+)', 'React', 'Angular', 'Node.js', 'Python'];
    return (
        <StyledAboutSection>
            
            {/* anchor offset */}
            <a className='anchor' id='about'>about</a>  
            {/* anchor offset */}

            <div className='pages-content'>
            <header>About Me</header>
            <div>
                <p>Hello! My name is <span>Tim</span> and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to build a Pizza ordering system taught me a lot about HTML & CSS!</p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <ul className="skills-list">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
            </div>
        </StyledAboutSection>
    );
}
export default About;