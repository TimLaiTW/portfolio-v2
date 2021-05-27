import React from 'react';
import styled from 'styled-components';
const List = (props) => {
    const StyledList = styled.section`
    .leaderboard {
        max-width: 490px;
        width: 100%;
        border-radius: 12px;
        
        &__profiles {
          background-color: #fff;
          border-radius: 0 0 12px 12px;
          padding: 15px 15px 10px;
          display: grid;
          row-gap: 8px;
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
          background-color: #fff;
          
          &:hover {
            transform: scale(1.2);
            box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
          }

          &:hover + .leaderboard__descrp {
            opacity: 1;
            transition: all .2s ease-in-out;
          }
        }
        
        // &__picture {
        //   max-width: 100%;
        //   width: 60px;
        //   border-radius: 50%;
        //   box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
        // }
        
        &__name {
          color: #979cb0;
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.64px;
          margin-left: 12px;
        }
        
        &__value {
          color: #35d8ac;
          font-weight: 700;
          font-size: 16px;
          text-align: right;

            & > a {
                text-decoration: none;
                font-size: 16px;
                cursor: pointer;
                &:hover {
                    transition: all 0.3s ease-out;
                    color: ${({ theme }) => theme.header};
                }
            }
          
            & > span {
                opacity: .8;
                font-weight: 600;
                font-size: 13px;
                margin-left: 3px;
            }
        }

        &__descrp {
            opacity: 0;
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
    `;

    const { title, url, place, period, descrp } = props.list;
    return (
        <StyledList>
            
            <div class="leaderboard__profiles">
                <div class="leaderboard__profile">
                    {/* <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture" /> */}
                    <span class="leaderboard__name">{title}</span>
                    <span class="leaderboard__value"><a href={url}>{place}</a></span>
                </div>
                {/* <span class="leaderboard__descrp">{descrp}</span> */}
            </div>
        </StyledList>
    )
}

export default List;