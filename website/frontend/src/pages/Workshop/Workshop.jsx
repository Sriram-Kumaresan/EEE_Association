import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Workshop.css';
import workshopImage from '../../asset/workshop_bot-4.png';
import workshopname from '../../asset/workshop-name.png';
import { Workshop_content } from "../../constants/description";

const Workshop = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [activeTab, setActiveTab] = useState(Workshop_content.tabs[0]);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        // Redirect based on the tab clicked
        switch (tabName) {
            case 'Description':
                navigate('/description'); // Replace with the correct path
                break;
            case 'Schedule':
                navigate('/schedule'); // Replace with the correct path
                break;
            case 'Prerequisites':
                navigate('/prerequisites'); // Replace with the correct path
                break;
            case 'Speaker':
                navigate('/speaker'); // Replace with the correct path
                break;
            case 'Takeaways':
                navigate('/takeaways'); // Replace with the correct path
                break;
            default:
                break;
        }
    };

    const handleArrowClick = (direction) => {
        const currentIndex = Workshop_content.tabs.indexOf(activeTab);
        let newIndex;

        if (direction === 'left') {
            newIndex = (currentIndex - 1 + Workshop_content.tabs.length) % Workshop_content.tabs.length;
        } else {
            newIndex = (currentIndex + 1) % Workshop_content.tabs.length;
        }

        setActiveTab(Workshop_content.tabs[newIndex]);
    };

    const getTabContent = () => {
        switch (activeTab) {
            case 'Description':
                return <p>{Workshop_content.descriptionText}</p>;
            case 'Schedule':
                return (
                    <ul>
                        {Workshop_content.schedule.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );
            case 'Prerequisites':
                return (
                    <ul>
                        {Workshop_content.prerequisites.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );
            case 'Speaker':
                return (
                    <div>
                        <h3>{Workshop_content.speaker.name}</h3>
                        <p>{Workshop_content.speaker.bio}</p>
                    </div>
                );
            case 'Takeaways':
                return (
                    <ul>
                        {Workshop_content.takeaways.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );
            default:
                return <p>{Workshop_content.descriptionText}</p>;
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
            handleArrowClick('right');
        }
        if (touchEnd - touchStart > 50) {
            handleArrowClick('left');
        }
    };

    // Attach touch event listeners
    useEffect(() => {
        const descriptionBox = document.querySelector('.workshop-description-box');
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
        <div className="workshop-page-background">
            <div className="workshop-heading">
                <img className='workshop-heading-img' src={workshopname} alt="Workshop Name" />
            </div>

            <div className="workshop-description-box">
                <div className="workshop-content-handling">
                    <h1 className="workshop-event-title">{Workshop_content.headerTitle}</h1>
                    <h2 className="workshop-description-header">{Workshop_content[activeTab.toLowerCase()]?.title || 'DESCRIPTION'}</h2>
                    <div className="workshop-description-text">
                        {getTabContent()}
                    </div>
                </div>

                <div className="workshop-image">
                    <img className="workshop-image-cont" src={workshopImage} alt="Workshop Content" />
                </div>

                <div className="workshop-tab-menu-container">
                    <div className="workshop-tab-menu">
                        {Workshop_content.tabs.map((tabName, index) => (
                            <div
                                key={index}
                                className={`workshop-tab-item ${activeTab === tabName ? 'active' : ''}`}
                                onClick={() => handleTabClick(tabName)}
                            >
                                <span>{tabName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="workshop-register-button-container">
                <div className="workshop-arrow workshop-arrow-left" onClick={() => handleArrowClick('left')}>&#9664;</div>
                <button className="workshop-register-button">{Workshop_content.registerButtonText}</button>
                <div className="workshop-arrow workshop-arrow-right" onClick={() => handleArrowClick('right')}>&#9654;</div>
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

export default Workshop;
