import { MapPin } from "lucide-react";

export function DiplomaCard({ title, years, school }: { title: string; years: string; school: string }) {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3">
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold">{title}</span>
                <span className="text-xs text-gray-500">{years}</span>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin size={10} /> {school}
            </p>
        </div>
    );
}
