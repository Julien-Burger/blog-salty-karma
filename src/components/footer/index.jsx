import { useTranslation } from "react-i18next";

import "./style.scss";

function Footer() {
    const { t } = useTranslation("footer");

    return (
        <footer>
            <div>
                <a
                    className="steamLink"
                    href="https://store.steampowered.com/app/2232680/The_Big_One/"
                    target="_blank"
                    aria-label="Buy The Big One on Steam"
                >
                    <i className="fa-brands fa-steam"></i>
                    <span>Steam</span>
                </a>
                <a
                    className="youtubeLink"
                    href="https://www.youtube.com/@saltykarma"
                    target="_blank"
                    aria-label="Subscribe to the Youtube channel"
                >
                    <i className="fa-brands fa-youtube"></i>
                    <span>Youtube</span>
                </a>
                <a
                    className="discordLink"
                    href="https://discord.com/invite/rtXFfFPsPw"
                    target="_blank"
                    aria-label="Join the Discord community"
                >
                    <i className="fa-brands fa-discord"></i>
                    <span>Discord</span>
                </a>
                <a
                    className="tiktokLink"
                    href="https://www.tiktok.com/@salty_karma"
                    target="_blank"
                    aria-label="Follow us on TikTok"
                >
                    <i className="fa-brands fa-tiktok"></i>
                    <span>TikTok</span>
                </a>
                <a
                    className="instagramLink"
                    href="https://www.instagram.com/salty_karma_studio/"
                    target="_blank"
                    aria-label="Follow us on Instagram"
                >
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </div>
            <p>© Salty Karma 2024, {t("allRights")}</p>
        </footer>
    );
}

export default Footer;
