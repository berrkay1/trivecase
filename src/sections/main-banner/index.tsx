"use client"
import React from 'react'
import './style.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <section className='main-banner'>
                <div className="content">
                   0.1
                </div>
                <div className="text-container">
                    <div className="big-title">{t("banner-title")}</div>
                    <div className="big-desc">{t("banner-desc")}</div>
                </div>

                <Image src={require("../../assets/images/gold-left.png")} alt='' className='gold-left' />
                <Image src={require("../../assets/images/gold-right.png")} alt='' className='gold-right' />
                <Image src={require("../../assets/images/gold-small.png")} alt='' className='gold-small' />

            </section>
        </>
    )
}

export default MainBanner