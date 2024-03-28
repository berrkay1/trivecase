"use client"
import React from 'react'
import './style.scss';
import Image from 'next/image';
import Button from '@/components/button';
import { useTranslation } from 'react-i18next';

const AwardWinningBroker = () => {

    const { t, i18n } = useTranslation();

    return (
        <section className='award-winning'>
            <div className="award-content">
                <div className="title">{t("award-broker")}</div>
                <div className="award-text-img-container">
                    <Image alt='' src={require("../../assets/images/Award Award Award Award Award Award Award Award.svg")} />
                    <Image alt='' src={require("../../assets/images/Award Award Award Award Award Award Award Award-1.svg")} />
                    <Image alt='' src={require("../../assets/images/Award Award Award Award Award Award Award Award-2.svg")} />
                    <Image alt='' src={require("../../assets/images/Award Award Award Award Award Award Award Award-3.svg")} />
                </div>

                <div className="award-img-container">
                    <div className="img-container">
                        <Image src={require("../../assets/images/award-1.png")} alt='' className='award-img' />
                    </div>
                    <div className="img-container">
                        <Image src={require("../../assets/images/award-2.png")} alt='' className='award-img' />
                    </div>
                </div>
                <div className="btn-container">
                    <Button text={t('Open-account')} />
                </div>
            </div>
        </section>
    )
}

export default AwardWinningBroker