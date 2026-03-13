import { ExternalLink } from "lucide-react";

function ProjectTag({ name }: { name: string }) {
    return (
        <span className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
            {name}
        </span>
    );
}

export function ProjectCard({ title, description, href, children }: { title: string; description: string; href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"
        >
            <h3 className="text-sm font-semibold mb-2 flex items-center justify-between">
                {title}
                <ExternalLink size={14} className="text-gray-500" />
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">{children}</div>
        </a>
    );
}

ProjectCard.Tag = ProjectTag;
