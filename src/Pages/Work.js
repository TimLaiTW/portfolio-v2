import React from "react";
import data from 'Content/ProjectList';
import styled from 'styled-components';

import Card from 'Utilities/Card';
const Work = () => {
    const StyledWordSection = styled.section`        
        .content-wrapper {
            margin: 0 auto;
            max-width: auto;
            flex-flow: row wrap;
            justify-content: center;
        }
    `;

    return (
        <StyledWordSection>

            {/* anchor offset */}
            <a className='anchor' id='project'>work</a>  
            {/* anchor offset */}
            
            <header>Things I've done</header>
            <div className="content-wrapper">
                {data &&  data.map((project, i) => (
                    <Card key={i} project={project}/>
                ))}
            </div>
        </StyledWordSection>
    );
}    
export default Work;