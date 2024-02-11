import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./style.scss";

function NavPanel({ showNavPanel, setShowNavPanel }) {
    const { t } = useTranslation("header");

    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                <li>
                    <Link to="/" reloadDocument>
                        <i className="fa-regular fa-newspaper"></i> Blog
                    </Link>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-address-card"></i> Portfolio
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Salty-Julien" target="_blank">
                        <i className="fa-brands fa-github"></i> Github
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavPanel;
