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
            color: var(--Dark);
        }

        &_header-link {
            float: right;
        }

        &__read-more {
            background: transparent;
            color: #bbb;
            padding: 0.4rem 0.6rem;
            border-radius: 0.3rem;
            border: 1px solid #444;
            font-size: 0.8rem;
            text-decoration: none;
            width: 7rem;
            margin-left: auto;
            position: relative;
            z-index: 5;
        }
        
        &__post-date {
            font-size: .7rem;
            margin-bottom: .5rem;
            transition: color 1s ease;
            color: var(--Dark);
        }
        
        &__details-wrapper {
            max-height: 0;
            opacity: 0;
            transition: max-height 1.5s ease, opacity 1s ease;
        }

        &__image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition: transform 3s ease;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: relative;
            z-index: -1;
        }
        
        &__text-wrapper {
            position: absolute;
            width: 100%;
            bottom: 0rem;
            padding: 1rem;
            color: white;
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
            &__post-date {
                color: var(--Light);
            }
            &__excerpt {
                color: var(--Light);
            }
            &__image {
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
                <h2 className="news-card__title">{title}</h2>
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