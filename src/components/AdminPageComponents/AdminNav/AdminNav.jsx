import { useState } from 'react';
import './AdminNav.css';
import QueryForm from '../../LoginPageComponents/SliderData/QueryForm';
import PointsForm from '../../LoginPageComponents/PointsForm/PointsForm';
import ImageGalleryForm from '../../LoginPageComponents/ImageGalleryForm/ImageGalleryForm';

export default function AdminNav() {
    const [activeLink, setActiveLink] = useState('Banner');

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <>
            <div className="admin-panal">

                <div className="sidebar">
                    <div className="sidebar-header">
                        Dashboard
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 'Banner' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleNavLinkClick('Banner')}
                            >Banner
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleNavLinkClick('Portfolio')}
                            >Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 'Gallery' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleNavLinkClick('Gallery')}
                            >Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 'Exit' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleNavLinkClick('Exit')}
                            >Exit
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user-panel">

                    {activeLink === "Banner" ? <QueryForm /> : ""}
                    {activeLink === "Portfolio" ? <PointsForm /> : ""}
                    {activeLink === "Gallery" ? <ImageGalleryForm /> : ""}
                </div>

            </div>
        </>
    )
}
