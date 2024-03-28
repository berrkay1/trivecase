"use client"
import AwardWinningBroker from "@/sections/award-winnig-broker";
import AccountList from "@/sections/form-account-list";
import MainBanner from "@/sections/main-banner";
import TradingTools from "@/sections/trading-tools";
import WhyFairMarkets from "@/sections/why-fair-markets";
import '../i18n.js';

export default function Page() {
  return (
    <>
      <MainBanner/>
      <AccountList />
      <WhyFairMarkets />
      <TradingTools />
      <AwardWinningBroker />
    </>
  );
}
