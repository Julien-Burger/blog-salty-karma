import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import "./style.scss";

function Error() {
    const { t } = useTranslation("error");

    return (
        <div className="error">
            <h1>404</h1>
            <h2>
                <Trans ns="error" i18nKey="pageNotFound">
                    Oups...
                    <br />
                    La page que vous cherchez n'existe plus.
                </Trans>
            </h2>

            <Link to="/">{t("backHome")}</Link>
        </div>
    );
}

export default Error;
