import React from 'react';
import styled from 'styled-components';
const List = (props) => {
    const StyledList = styled.section`
        .leaderboard {
            
            &__profiles {
                background-color: transparent;
                border-radius: 0 0 12px 12px;
                padding: 15px 15px 10px;
                display: grid;
                row-gap: 8px;
                width: 100%;
                border-radius: 12px;
            }
            
            &__profile {
                display: grid;
                grid-template-columns: 3fr 3fr;
                align-items: center;
                padding: 10px 30px 10px 10px;
                overflow: hidden;
                border-radius: 10px;
                box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
                cursor: pointer;
                transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
                background-color: transparent;
                
                &:hover {
                    transform: scale(1.2);
                    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
                }

                &:hover + .leaderboard__descrp {
                    display: block;
                    transition: all .2s ease-in-out;
                }
            }
            
            &__name {
                color: #979cb0;
                font-weight: 600;
                font-size: 18px;
                letter-spacing: 0.64px;
                margin-left: 12px;
            }
            
            &__value {
                color: #35d8ac;
                font-weight: 700;
                font-size: 14px;
                text-align: right;

                & > a {
                    text-decoration: none;
                    cursor: pointer;
                    &:hover {
                        transition: all 0.3s ease-out;
                        color: ${({ theme }) => theme.header};
                    }
                }
            
                & > span {
                    font-weight: 600;
                    font-size: 13px;
                    margin-left: 3px;
                }
            }

            &__descrp {
                display: none;
                transition: all .2s ease-in-out;
            }
        }
      
        // bare minimuu styles
        
        body {
            margin: 0;
            background-color: #eaeaea;
            display: grid;
            height: 100vh;
            place-items: center;
            font-family: 'Source Sans Pro', sans-serif;
        }
        
        .leaderboard {
            box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
        }

        ul {
            padding: 30px;

            li {
                display: block;
                width: 480px;
                margin-top: 16px;
            }
        }
    `;

    const { title, url, place, period, descrp } = props.list;
    return (
        <StyledList>
            
            <div class="leaderboard__profiles">
                <div class="leaderboard__profile">
                    <span class="leaderboard__name">{title}</span>
                    <span class="leaderboard__value"><a href={url}>{place}</a></span>
                </div>
                <ul class="leaderboard__descrp">
                    <li key='1'>{period}</li>
                    <li kry='2'>{descrp}</li>
                </ul>
            </div>
        </StyledList>
    )
}

export default List;