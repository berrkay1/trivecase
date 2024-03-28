import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "award-broker": "Award Winning Broker",
            "banner-title": "Unleash the power of trading Gold CFDs Today",
            "banner-desc": "Spreads starting from 0.1",
            "account-list": "Account list",
            "add-list": "Add list",
            "name": "Name",
            "name": "Name",
            "surname": "Surname",
            "email": "Email",
            "phone": "Phone",
            "no-user": "No user entered",
            "delete": "Delete",
            "why-fairmarkets": "Why FairMarkets",
            "Lowest": "Lowest",
            "costs": "costs",
            "Instant": "Instant",
            "Execution": "Execution",
            "Local": "Local",
            "Support": "Support",
            "lowestDesc": "Our transparent and low commissions minimize costs to maximize returns",
            "instantDesc": "High Number of Executions in 0.02 seconds",
            "localDesc": "24/5 expert customer support, available in 6 languages",
            "trading-title": "Trading Platforms & Tools",
            "meta-4": "MetaTrader 4 is a sophisticated trading application that provides you with a variety of tools and features to assist you in conducting analysis and customizing your trading experience",
            "meta-5": "MT5’s smooth user interface can be fully shaped to your taste so you can trade & analyze the way you want.",
            "Booster": "Booster",
            "VPS - Virtual": "VPS - Virtual",
            "Private-Server": "Private Server",
            "Trading": "Trading",
            "Central": "Central",
            "Open-account": "Open account",
            "RISK-WARNING":"RISK WARNING",
            "footer-1":"Fairmarkets International Ltd., which is subject to ownership and control of Trive Investment B.V. , holds an Investment Dealer (Full Service Dealer, excluding Underwriting) Licence with licence number GB21026295 pursuant to section 29 of the Securities Act 2005, Rule 4 of the Securities Rules 2007, and the Financial Services Rules 2008. Fairmarkets International Ltd. is authorized and regulated by the Mauritius Financial Services Commission (FSC) and holds Global Business Licence number GB21026295 under Section 72(6) of the Financial Services Act. FairMarkets is a trademark of Fairmarkets International Ltd.",
            "footer-2":"No services are offered to stateless persons, persons under the age of 18 years, persons and/or residents of sanctioned countries or any other jurisdiction where the distribution of leveraged instruments is prohibited, and citizens of any state or country where it may be against the law of that country to trade with a Mauritius and/or Australia based company and/or where the services are not made available by the Fairmarkets International Ltd. and/or Fairmarkets Trading Pty Ltd to hold an account with us. In any case, above all, it is your responsibility to avoid contravening any legislation in the country from where you are at the time.",
            "RISK-DISCLOSURE":"RISK DISCLOSURE",
            "footer-3":"CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. See our full Risk Disclosure and Terms of Business for further details."
        }
    },
    tr: {
        translation: {
            "award-broker": "Ödüllü Komisyoncu",
            "banner-title": "Bugün Altın CFD ticareti yapmanın gücünü açığa çıkarın",
            "banner-desc": "0.1 ' Den Yayılan Başlangıçlar",
            "account-list": "Hesap listesi",
            "add-list": "Liste ekle",
            "name": "İsim",
            "surname": "Soyisim",
            "email": "Email",
            "phone": "Telofon No",
            "no-user": "Kullanıcı yok",
            "delete": "Sil",
            "why-fairmarkets": "Neden FairMarkets",
            "Lowest": "En düşük",
            "costs": "maliyetler",
            "Instant": "Anlık",
            "Execution": "Uygulama",
            "Local": "Yerel",
            "Support": "Destek",
            "lowestDesc": "Şeffaf ve düşük komisyonlarımız, getirileri en üst düzeye çıkarmak için maliyetleri en aza indirir",
            "instantDesc": "0,02 Saniyede Yüksek Yürütme Sayısı",
            "localDesc": "6 dilde 5/24 uzman müşteri desteği",
            "trading-title": "Ticaret Platformları ve Araçları",
            "meta-4": "MetaTrader 4, analiz yapmanıza ve ticaret deneyiminizi kişiselleştirmenize yardımcı olacak çeşitli araçlar ve özellikler sağlayan gelişmiş bir ticaret uygulamasıdır.",
            "meta-5": "MT5'in pürüzsüz kullanıcı arayüzü tamamen zevkinize göre şekillendirilebilir, böylece istediğiniz şekilde işlem yapabilir ve analiz yapabilirsiniz.",
            "Booster": "Yükseltici",
            "VPS - Virtual": "VPS - Sanal",
            "Private-Server": "Özel Sunucu",
            "Trading": "Ticaret",
            "Central": "Merkezi",
            "Open-account": "Hesap aç",
            "RISK-WARNING":"RİSK UYARISI",
            "footer-1":"Trive Investment B.V.'nin mülkiyeti ve kontrolüne tabi olan Fairmarkets International Ltd., 2005 Menkul Kıymetler Kanunu'nun 29. bölümü, Menkul Kıymetler Kuralları'nın 4. Kuralı uyarınca GB21026295 lisans numarasıyla Yatırım Bayisi (Tam Hizmet Satıcısı, Sigortacılık hariç) Lisansına sahiptir. 2007 ve Finansal Hizmetler Kuralları 2008. Fairmarkets International Ltd., Mauritius Finansal Hizmetler Komisyonu (FSC) tarafından yetkilendirilmiş ve denetlenmektedir ve Finansal Hizmetler Yasası'nın 72(6) Bölümü uyarınca GB21026295 Küresel İşletme Lisansına sahiptir. FairMarkets, Fairmarkets International Ltd.'nin ticari markasıdır.",
            "footer-2":"Vatansız kişilere, 18 yaşın altındaki kişilere, yaptırım uygulanan ülkelerde veya kaldıraçlı araçların dağıtımının yasak olduğu diğer herhangi bir yargı bölgesinde ikamet eden kişilere ve/veya sakinlerine ve bu yasaya aykırı olabilecek herhangi bir eyalet veya ülkenin vatandaşlarına hiçbir hizmet sunulmamaktadır. Mauritius ve/veya Avustralya merkezli bir şirketle ticaret yapmak ve/veya hizmetlerin Fairmarkets International Ltd. ve/veya Fairmarkets Trading Pty Ltd tarafından bizde hesap sahibi olmak için sağlanmadığı durumlarda o ülkenin kanunları. Her durumda, her şeyden önce, o sırada bulunduğunuz ülkedeki herhangi bir yasayı ihlal etmekten kaçınmak sizin sorumluluğunuzdur.",
            "RISK-DISCLOSURE":"RİSK AÇIKLAMASI",
            "footer-3":"CFD'ler karmaşık araçlardır ve kaldıraç nedeniyle hızla para kaybetme riski yüksektir. CFD'lerin nasıl çalıştığını anlayıp anlamadığınızı ve paranızı kaybetme riskini göze alıp alamayacağınızı düşünmelisiniz. Daha fazla ayrıntı için tam Risk Açıklamamıza ve İş Şartlarımıza bakın."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;