export function SkillTag({ name }: { name: string }) {
    return (
        <span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1 text-xs text-gray-700 dark:text-gray-300">
            {name}
        </span>
    );
}
