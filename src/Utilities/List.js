import React from 'react';
import styled from 'styled-components';
const List = (props) => {
    const StyledList = styled.section`
        .leaderboard {
            
            &__profiles {
                background-color: transparent;
                border-radius: 0 0 0.75rem 0.75rem;
                display: grid;
                width: 100%;
                border-radius: 0.75rem;
            }
            
            &__profile {
                display: grid;
                grid-template-columns: 3fr 3fr;
                align-items: center;
                padding: 0.75rem 1.875rem 0.75rem 0.75rem;
                overflow: hidden;
                border-radius: 0.75rem;
                box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
                cursor: pointer;
                transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
                background-color: transparent;
                
                &:hover {
                    transform: scale(1.2);
                    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
                }

                &:hover + .leaderboard__descrp {
                    visibility: visible;
                    opacity: 1;
                    max-height: 62.5rem;
                    padding: 1.875rem;
                }
            }
            
            &__name {
                color: ${({ theme }) => theme.text};
                font-weight: 400;
                font-size: 1.125rem;
                letter-spacing: .25rem;
                margin-left: 0.75rem;
            }
            
            &__value {
                color: #35d8ac;
                font-weight: 700;
                font-size: 0.875rem;
                text-align: right;

                & > a {
                    text-decoration: none;
                    cursor: pointer;
                    letter-spacing: .1rem;
                    &:hover {
                        transition: all 0.3s ease-out;
                        color: ${({ theme }) => theme.Btn};
                    }
                }
            
                & > span {
                    font-weight: 600;
                    font-size: 0.875rem;
                    margin-left: 0.2rem;
                }
            }

            &__descrp {
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s, opacity 0.8s linear;
                max-height: 0;
                list-style-type: none;
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
            box-shadow: 0 0 40px -0.75rem rgba(0, 0, 0, .4);
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
                    <li>{period}</li>
                    <li>{descrp}</li>
                </ul>
            </div>
        </StyledList>
    )
}

export default List;