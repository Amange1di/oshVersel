import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./HomeViews.scss";

export function HomeViews({mobile}) {
 

    const contentData = [
        {
            id: 1,
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            title: "ПОДБОРКА ДЛЯ ВАС",
            texts: [
                {
                    description: `Добро пожаловать! Здесь вы найдете подборку интересного и разнообразного контента, который мы тщательно отбираем для вас. Будь то познавательные статьи, увлекательные видео, аналитические обзоры или вдохновляющие истории — каждый материал создан, чтобы расширить кругозор,
                     подарить новые идеи и оставить яркие впечатления.
                     Мы следим за актуальными трендами, новыми открытиями и качественным контентом, чтобы предложить вам только лучшее.
                     Добро пожаловать! Здесь вы найдете подборку интересного и разнообразного контента, который мы тщательно отбираем для вас. Будь то познавательные статьи, увлекательные видео, аналитические обзоры или вдохновляющие истории — каждый материал создан, чтобы расширить кругозор,
                     подарить новые идеи и оставить яркие впечатления.
                     Мы следим за актуальными трендами, новыми открытиями и качественным контентом, чтобы предложить вам только лучшее.`
                }
            ]
        }
    ];

    return (
        <div className="container">
     <div className="home-views">
            <div className="content">
                {contentData.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="video-wrapper">
                            <ReactPlayer
                                url={item.video}
                                controls
                                width="100%"
                                height="auto"
                                className="react-player"
                            />
                        </div>
                        <div className="text-block">
                            <h3>{item.title}</h3>
                            {item.texts.map((text, index) => (
                                <p key={index}>
                                    {mobile
                                        ? text.description.substr(0, 200).trim() + '...'
                                        : text.description.length > 150
                                        ? text.description.substr(0, 500).trim() + '...'
                                        : text.description}
                                </p>
                            ))}
                            <button className="details-button">подробнее</button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
        </div>
   
    );
}

export default HomeViews;


