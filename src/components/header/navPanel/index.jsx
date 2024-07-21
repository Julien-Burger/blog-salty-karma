import "./style.scss";

function NavPanel({ showNavPanel }) {
    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                {/* <li>
                    <a href="https://saltykarma.com">
                        <i class="fa-solid fa-house"></i>Salty Karma
                    </a>
                </li> */}
                <li>
                    <a
                        href="https://store.steampowered.com/app/2232680/The_Big_One/"
                        target="_blank"
                        aria-label="Buy The Big One on Steam"
                    >
                        <i className="fa-brands fa-steam"></i>
                        Steam
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@saltykarma" target="_blank" aria-label="Subscribe to the Youtube channel">
                        <i className="fa-brands fa-youtube"></i>Youtube
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/invite/rtXFfFPsPw" target="_blank" aria-label="Join the Discord community">
                        <i className="fa-brands fa-discord"></i>
                        Discord
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@salty_karma" target="_blank" aria-label="Follow us on TikTok">
                        <i class="fa-brands fa-tiktok"></i>TikTok
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/salty_karma_studio/" target="_blank" aria-label="Follow us on Instagram">
                        <i className="fa-brands fa-instagram"></i>Instagram
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavPanel;
