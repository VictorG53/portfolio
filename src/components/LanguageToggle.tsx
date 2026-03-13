import type { Lang } from "../i18n/translations";

export function LanguageToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition cursor-pointer font-semibold leading-none text-[14px]"
            title="Toggle language"
        >
            {lang === "en" ? "FR" : "EN"}
        </button>
    );
}
