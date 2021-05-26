import React from "react";
import data from 'Content/PlaceList';
import styled from 'styled-components';
import List from 'Utilities/List';
const Experience = () => {
    const StyledExperSection = styled.section`    

          
    `;
    return (
        <StyledExperSection>
           
            {/* anchor offset */}
            <a className='anchor' id='experience'>experience</a>  
            {/* anchor offset */}

            <div className='pages-content'>
                <header>Where I've worked</header>
                    {data && data.map((list, i) => (
                        <List  key={i} list={list}/>
                    ))}
            </div>
        </StyledExperSection>
    );
}
export default Experience;