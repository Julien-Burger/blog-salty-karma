import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import saltyKarmaLogo from "../../assets/salty_karma_logo.webp";
import "./style.scss";
import NavPanel from "./navPanel";
import { useOutsideClick } from "../../utils/hooks";

function Header() {
    const { t, i18n } = useTranslation("header");
    const [displayedLang, setDisplayedLang] = useState(i18n.language);
    const [y, setY] = useState(window.scrollY);
    const [showNavPanel, setShowNavPanel] = useState(false);
    const navPanelRef = useRef();

    useOutsideClick(navPanelRef, () => {
        setShowNavPanel(false);
    });

    useEffect(() => {
        const scroll = () => {
            setY(window.scrollY);
        };

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    const handleClickSwitchLanguage = () => {
        if (displayedLang == "fr") {
            setDisplayedLang("en");
            i18n.changeLanguage("en");
        } else {
            setDisplayedLang("fr");
            i18n.changeLanguage("fr");
        }
    };

    return (
        <header style={y > 0 ? { borderBottom: "1px solid rgb(219 219 219)" } : {}}>
            <div className="innerHeader">
                <a href="https://www.saltykarma.com" className="saltyKarma">
                    <img className="saltyKarmaLogo" src={saltyKarmaLogo} alt="Salty Karma logo" />
                    <h1>
                        <span>Salty</span> Karma
                    </h1>
                </a>

                <div
                    className={y > 0 ? "backUp backupShow" : "backUp"}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <i className="fa-solid fa-arrow-up fa-lg"></i>
                    <span>{t("backUp")}</span>
                </div>

                <div className="rightContent">
                    <button className="languageContainer" onClick={handleClickSwitchLanguage}>
                        <i className="fa-solid fa-globe"></i>
                        {i18n.language.startsWith("fr") ? <span>Français</span> : <span>English</span>}
                    </button>

                    <div className="navPanelContainer" ref={navPanelRef}>
                        <i className="fa-solid fa-bars fa-lg sideBar" onClick={() => setShowNavPanel(!showNavPanel)}></i>
                        <NavPanel showNavPanel={showNavPanel} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
