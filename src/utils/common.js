import i18next from "../app/i18n";

/**
 * Compare the actual date to another date and return "Today", "Yesterday" or "There is X days"
 * @param {string} date The date you want to compare. Format: DD/MM/YYYY
 * @returns Info about the difference between the two date
 */
export const getDateSince = (date) => {
    let actualDate = new Date();
    let otherDate = new Date(refactorDate(date));

    let differenceInTime = actualDate.getTime() - otherDate.getTime();

    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays < 1) {
        return i18next.t("today", { ns: "blogs" });
    } else if (differenceInDays < 2) {
        return i18next.t("yesterday", { ns: "blogs" });
    } else if (differenceInDays < 30) {
        return `${Math.trunc(differenceInDays)} ${i18next.t("daysAgo", { ns: "blogs" })}`;
    } else if (differenceInDays < 365) {
        let months = Math.trunc(differenceInDays / 30);

        if (months > 1) {
            return `${months} ${i18next.t("monthsAgo", { ns: "blogs" })}`;
        } else {
            return `${months} ${i18next.t("monthAgo", { ns: "blogs" })}`;
        }
    } else {
        let years = Math.trunc(differenceInDays / 365);

        if (years > 1) {
            return `${years} ${i18next.t("yearsAgo", { ns: "blogs" })}`;
        } else {
            return `${years} ${i18next.t("yearAgo", { ns: "blogs" })}`;
        }
    }
};

/**
 * Convert an US date format to an european date format
 * @param {string} date The date to convert. Format: MM/DD/YYYY
 * @returns The date converted to european format
 */
export const refactorDate = (date) => {
    let dateSplited = date.split("/");

    return `${dateSplited[1]}/${dateSplited[0]}/${dateSplited[2]}`;
};

export const generateUniqueId = () => {
    return Math.floor(Math.random() * 10000);
};

export const extractLinks = (string) => {
    let parts = [];
    let regex = /(<link>(.*?)<\/link>)|([^<]+)/g;
    let match;

    while ((match = regex.exec(string)) !== null) {
        if (match[2]) {
            // Texte à l'intérieur des balises <link>
            parts.push({ text: match[2], isLink: true });
        } else if (match[3]) {
            // Texte en dehors des balises <link>
            parts.push({ text: match[3], isLink: false });
        }
    }

    return parts;
};
