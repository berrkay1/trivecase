"use client"
import React from 'react'
import './style.scss';
import FairMarketsCard from '@/components/fair-markets-card';
import { useTranslation } from 'react-i18next';

const WhyFairMarkets = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className="why-fair">
            <div className="container">
                <div className="content">
                    <div className="title">{t("why-fairmarkets")}</div>
                    <div className="cards">
                        <FairMarketsCard
                            description={t("lowestDesc")}
                            icon={require("../../assets/images/icon-wallet.png")}
                            title={<span>{t("Lowest")} <br /> {t("costs")}</span>}
                            bgColor='#5770EA'
                        />
                        <FairMarketsCard
                            description={t('instantDesc')}
                            icon={require("../../assets/images/icon-flash.png")}
                            title={<span>{t("Instant")}  <br /> {t("Execution")}</span>}
                            bgColor='#0097D6'
                        />
                        <FairMarketsCard
                            description={t('localDesc')}
                            icon={require("../../assets/images/icon-phone.png")}
                            title={<span>{t("Local")}  <br /> {t("Support")}</span>}
                            bgColor='#17ADA1'
                        />
                    </div>

                </div>


            </div>
        </section>
    )
}

export default WhyFairMarkets