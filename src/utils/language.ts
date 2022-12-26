import i18next from "i18next";
import {urlsCommon, urlsOut, urlsTR, urlsEN} from './urls';

const LANG_KEY = "website_lang";

export const urlObj: any = {
    tr: urlsTR,
    en: urlsEN,
};

export const isCommonPage = () => {
    return Object.values(urlsCommon).find(value => value === window?.location?.pathname);
};

const checkLanguage = (val: string) => {
    return ['en', 'tr'].includes(val) ? val : 'en';
};

export const Language = {
    change: (langParam: string) => {
        try {
            const lang = checkLanguage(langParam)
            i18next.changeLanguage(lang);
            localStorage.setItem(LANG_KEY, lang);

            if (isCommonPage()) {
                return;
            }

            const translatedPathName: any = Object.values(urlObj)
                .reduce((acc, item: any) => {
                    let result = acc;

                    const index = Object.values(item).findIndex(value => value === window?.location?.pathname);

                    if (index > -1 && lang in urlObj) {
                        result = Object.values(urlObj[lang])[index];
                    }

                    console.log("result:", result);
                    console.log("result lang:", lang);
                    console.log("result urlObj:", urlObj);
                    return result;
                }, '/');

            // eslint-disable-next-line no-restricted-globals
            history.replaceState('', '', `${translatedPathName}${window?.location?.search}`);
        } catch (err) {
            console.log('err', err);
            // eslint-disable-next-line no-restricted-globals
            history.replaceState('', '', `/${window?.location?.search}`);
        }
    },
    get: (): string => {
        if (window.location.pathname !== "/" && !isCommonPage()) {
            const langFromUrl = checkLanguage(window.location.pathname.split('/')[1]);

            return langFromUrl;
        }

        const lang = checkLanguage(localStorage.getItem(LANG_KEY) as string);

        if (!lang) {
            return checkLanguage(window?.navigator?.language?.split("-")[0] || 'en');
        }

        return lang.toString();
    }
};

export const urls = {...urlObj[Language.get()], ...urlsOut, ...urlsCommon};
