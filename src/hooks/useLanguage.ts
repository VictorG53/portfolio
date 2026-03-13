import { useState } from "react";
import type { Lang } from "../i18n/translations";

export function useLanguage() {
    const [lang, setLang] = useState<Lang>(() => {
        const stored = localStorage.getItem("lang");
        return (stored as Lang) ?? "en";
    });

    const toggle = () => {
        const next: Lang = lang === "en" ? "fr" : "en";
        localStorage.setItem("lang", next);
        setLang(next);
    };

    return { lang, toggle };
}
