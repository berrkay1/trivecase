"use client"
import React from 'react'
import './style.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className="footer">
            <div className="container">
                <div className="text-container">
                    <span>{t("RISK-WARNING")}</span> <br />
                    {t("footer-1")}
                    <br /><br /><br /><br />
                    {t("footer-2")}
                    <br /><br /><br />

                    {t("RISK-DISCLOSURE")} <br /> {t("footer-3")}

                </div>
            </div>
        </section>
    )
}

export default Footer