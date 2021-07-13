import React from "react";
import styled from 'styled-components';
const Card = (props) => {
    const StyledCardSection = styled.section`
    .news-card {
        max-height: 20rem;
        margin-top: 1.5rem;
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        
        &__title {
            transition: color 1s ease;
            margin-bottom: .5rem;
            color: transparent;
            float: left;
            font-size: 20px;
            font-weight: bold;
        }

        &_header-link {
            float: right;
        }

        &__read-more {
            background: transparent;
            color: transparent;
            padding: 0.4rem 0.6rem;
            border-radius: 0.3rem;
            border: none;
            font-size: 0.8rem;
            font-weight: bold;
            text-decoration: none;
            text-align: center;
            vertical-align: middle;
            width: 7rem;
            position: relative;
            margin: 5px;
            z-index: 5;
        }
        
        &__post-date {
            font-size: .7rem;
            margin-top: 1.5rem;
            margin-bottom: .5rem;
            transition: color 1s ease;
            color: transparent;
        }
        
        &__details-wrapper {
            max-height: 0;
            opacity: 0;
            transition: max-height 1.5s ease, opacity 1s ease;
        }

        &__image {
            width: 100%;
            height: 100%;
            opacity: 0.9;
            display: block;
            object-fit: cover;
            transition: transform 3s ease, opacity 1s ease;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: relative;
            z-index: -1;
        }
        
        &__text-wrapper {
            background-color: transparent;
            position: absolute;
            width: 100%;
            bottom: 0rem;
            padding: 1rem;
            transition: background-color 1.5s ease;
        }

        &__excerpt {
            font-weight: 300;
            transition: color 1s ease;
            color: var(--Dark);
        }
        
        &__card-link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        &:hover .news-card{
            &__details-wrapper {
                max-height: 3rem;
                opacity: 1;
            }
            &__text-wrapper {
                background-color: rgba(0, 0, 0, 0.6);
            }
            &__title {
                color: yellow;
            }
            &__read-more {
                border: 1px solid white;
                color: yellow;
            }
            &__post-date, &__excerpt {
                color: var(--Light);
            }
            &__image {
                opacity: 0.1;
                transform: scale(1.2);
                z-index: -1;
            }
        }   
    }
    `;
    const { title, date, body, img, app_link, git_link } = props.project;
return (
    <StyledCardSection>
        <div className="news-card">
            <a href={app_link} className="news-card__card-link" target="_blank" rel="noreferrer noopener"></a>
            <img src={img} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
                <div className='news-card_header'>
                    <div className="news-card__title">{title}</div>
                    <div className='news-card_header-link'>
                        <a href={app_link} className="news-card__read-more" target="_blank" rel="noreferrer noopener">Check it out</a>
                        <a href={git_link} className="news-card__read-more" target="_blank" rel="noreferrer noopener">Github</a>
                    </div>
                </div>
                <div className="news-card__post-date">{date}</div>
                <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">{body}</p>    
                </div>
            </div>
        </div>
    </StyledCardSection>
    )
}
export default Card;