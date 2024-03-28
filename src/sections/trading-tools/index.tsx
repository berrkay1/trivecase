"use client"
import React from 'react'
import './style.scss';
import MetaTraderCard from '@/components/meta-trader-card';
import ToolsTraderCard from '@/components/tools-trader-card';
import Button from '@/components/button';
import { useTranslation } from 'react-i18next';

const TradingTools = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className='trading-tools'>
            <div className="container">
                <div className="title">{t("trading-title")}</div>
                <div className="trading-tools-content">

                    <MetaTraderCard
                        classNames='left'
                        text='MetaTradder4'
                        description={t("meta-4")}
                        footerText='MT4'
                        image={require("../../assets/images/phone-left.png")}
                    />
                    <MetaTraderCard
                        classNames='right'
                        text='MetaTradder5'
                        description={t("meta-5")}
                        footerText='MT5'
                        image={require("../../assets/images/phone-right.png")}
                    />
                </div>

                <div className="tools-content">
                    <ToolsTraderCard
                        title={<span>MT4/MT5 <br /> {t("Booster")}</span>}
                        description='Boost your platform with add-ons designed to enhance your trading experience!'
                        icon={require("../../assets/images/tools-1.png")}
                    />
                    <ToolsTraderCard
                        title={<span>{t("VPS - Virtual")} <br /> {t("Private-Server")}</span>}
                        description='Boost your platform with add-ons designed to enhance your trading experience!'
                        icon={require("../../assets/images/tools-2.png")}
                    />
                    <ToolsTraderCard
                        title={<span>{t("Trading")} <br /> {t("Central")}</span>}
                        description='Boost your platform with add-ons designed to enhance your trading experience!'
                        icon={require("../../assets/images/tools-3.svg")}
                    />
                </div>

                <div className="btn-container">
                    <Button text={t('Open-account')} />
                </div>
            </div>
        </section>
    )
}

export default TradingTools