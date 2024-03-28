"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import './style.scss';
import { useTranslation } from 'react-i18next';
const Header = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const { i18n } = useTranslation();
    const handleChange = (event: any) => {
        setSelectedLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    };
    return (
        <>
            <section className='header-section'>
                <div className="container">
                    <div className="header-content">
                        <div className="logo-container">
                            <Image src={require("../../assets/images/Image 9.png")} alt='logo' className='logo' />
                        </div>
                        <div className="dropdown">
                            <select value={selectedLanguage} onChange={handleChange}>
                                <option value="en">EN</option>
                                <option value="tr">TR</option>
                            </select>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Header