import React, { useState, useEffect } from 'react';
import './EventTwo_des.css';
import { EventTwo_content } from "../../constants/description";

const EventTwo_des = () => {
    const [activeTab, setActiveTab] = useState(EventTwo_content.tabs[0]);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleArrowClick = (direction) => {
        const currentIndex = EventTwo_content.tabs.indexOf(activeTab);
        let newIndex;

        if (direction === 'left') {
            newIndex = (currentIndex - 1 + EventTwo_content.tabs.length) % EventTwo_content.tabs.length;
        } else {
            newIndex = (currentIndex + 1) % EventTwo_content.tabs.length;
        }

        setActiveTab(EventTwo_content.tabs[newIndex]);
    };

   
    const getTabContent = () => {
        switch (activeTab) {
            case 'Description':
                return EventTwo_content.descriptionText;

            case 'Rules':
                return (
                    <ul>
                        {EventTwo_content.rules.content.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                );

            case 'Rounds':
                return (
                    <ul>
                        {EventTwo_content.rounds.content.map((round, index) => (
                            <li key={index}>{round}</li>
                        ))}
                    </ul>
                );

            case 'Schedule':
                return (
                    <ul>
                        {EventTwo_content.schedule.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );

            case 'Contacts':
                return (
                    <div>
                        <p>Phones:</p>
                        <ul>
                            {EventTwo_content.contactDetails.phones.map((phone, index) => (
                                <li key={index}>{phone}</li>
                            ))}
                        </ul>
                        <p>Emails:</p>
                        <ul>
                            {EventTwo_content.contactDetails.emails.map((email, index) => (
                                <li key={index}>{email}</li>
                            ))}
                        </ul>
                    </div>
                );

            default:
                return EventTwo_content.descriptionText;
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
                <h1 className="event-title">{EventTwo_content.headerTitle}</h1>
                <h2 className="description-header">{EventTwo_content[activeTab.toLowerCase()]?.title || 'DESCRIPTION'}</h2>

                <p className="description-text">
                    {getTabContent()}
                </p>

                <div className="tab-menu-container">
                    <div className="tab-menu">
                        {EventTwo_content.tabs.map((tabName, index) => (
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
                <button className="register-button">{EventTwo_content.registerButtonText}</button>
                <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>&#9654;</div>
            </div>
        </div>
    );
};

export default EventTwo_des;
