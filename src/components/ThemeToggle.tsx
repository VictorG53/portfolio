import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition cursor-pointer"
            title="Toggle theme"
        >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}
