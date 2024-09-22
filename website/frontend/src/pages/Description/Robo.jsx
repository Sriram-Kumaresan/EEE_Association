import React, { useState, useEffect } from 'react';
import './Description.css';
import { Robo_cont } from "../../constants/description";

const Robo = () => {
    const [activeTab, setActiveTab] = useState(Robo_cont.tabs[0]);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleArrowClick = (direction) => {
        const currentIndex = Robo_cont.tabs.indexOf(activeTab);
        let newIndex;

        if (direction === 'left') {
            newIndex = (currentIndex - 1 + Robo_cont.tabs.length) % Robo_cont.tabs.length;
        } else {
            newIndex = (currentIndex + 1) % Robo_cont.tabs.length;
        }

        setActiveTab(Robo_cont.tabs[newIndex]);
    };

    const getTabContent = () => {
        switch (activeTab) {
            case 'Description':
                return Robo_cont.descriptionText;

            case 'Rules':
                return (
                    <ul>
                        {Robo_cont.rules.content.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                );

            case 'Rounds':
                return (
                    <div>
                        {Robo_cont.rounds.content.map((round, index) => (
                            <div key={index}>
                                <h3>{round.title}</h3>
                                <ul>
                                    {round.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                );

            case 'Schedule':
                return (
                    <ul>
                        {Robo_cont.schedule.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );

            case 'Contacts':
                return (
                    <div>
                        <p>Phones:</p>
                        <ul>
                            {Robo_cont.contactDetails.phones.map((phone, index) => (
                                <li key={index}>{phone}</li>
                            ))}
                        </ul>
                        <p>Emails:</p>
                        <ul>
                            {Robo_cont.contactDetails.emails.map((email, index) => (
                                <li key={index}>{email}</li>
                            ))}
                        </ul>
                    </div>
                );

            default:
                return Robo_cont.descriptionText;
        }
    };

    // Handle swipe gestures
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        // Detect swipe direction
        if (touchStart - touchEnd > 50) {
            // Swiped left
            handleArrowClick('right');
        }

        if (touchEnd - touchStart > 50) {
            // Swiped right
            handleArrowClick('left');
        }
    };

    // Attach touch event listeners
    useEffect(() => {
        const descriptionBox = document.querySelector('.description-box');

        if (descriptionBox) {
            descriptionBox.addEventListener('touchstart', handleTouchStart);
            descriptionBox.addEventListener('touchmove', handleTouchMove);
            descriptionBox.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (descriptionBox) {
                descriptionBox.removeEventListener('touchstart', handleTouchStart);
                descriptionBox.removeEventListener('touchmove', handleTouchMove);
                descriptionBox.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [touchStart, touchEnd]);

    return (
        <div className="page-background">
            <div className="description-box">
                <h1 className="event-title">{Robo_cont.headerTitle}</h1>
                <h2 className="description-header">{Robo_cont[activeTab.toLowerCase()]?.title || 'DESCRIPTION'}</h2>

                <p className="description-text">
                    {getTabContent()}
                </p>

                <div className="tab-menu-container">
                    <div className="tab-menu">
                        {Robo_cont.tabs.map((tabName, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`tab-item ${activeTab === tabName ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tabName)}
                                >
                                    <span>{tabName}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="register-button-container">
                <div className="arrow arrow-left" onClick={() => handleArrowClick('left')}>&#9664;</div>
                <button className="register-button">{Robo_cont.registerButtonText}</button>
                <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>&#9654;</div>
            </div>
              {/* <div>
            
                <div className="workshop-registered-message">
                    Registered
                </div>
          

            <div className="workshop-after-register"></div>
        </div> */}
        </div>
    );
};

export default Robo;
