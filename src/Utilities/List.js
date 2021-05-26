import React from 'react';
import styled from 'styled-components';
const List = (props) => {
    const StyledList = styled.section`
        .list-title {
            font-family: var(--font-primary);
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 0px;
            transition: all .4s ease-in-out;
            display: inline-block;
            &:hover {
                transform: scale(1.1)
            }
            &:hover + .list-descrp {
                display: block;        
            }
        }

        .list-period {
            margin-bottom: 10px;
            font-size: 14px;
            font-family: var(--font-mainContent);
            top: 10px;
        }

        .list-descrp {
            display: none;
        }

        a {
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            &:hover {
                transition: all 0.3s ease-out;
                color: ${({ theme }) => theme.header};
            }
        }
    `;

    const { title, url, place, period, descrp } = props.list;
    return (
        <StyledList>
            <p className="list-title">{title}<a href={url}> @{place}</a></p>
            <p className="list-descrp">
                <div className='list-period'>{period}</div>
                {descrp}
            </p>
        </StyledList>
    )
}

export default List;