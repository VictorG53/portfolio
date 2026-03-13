import { MapPin } from "lucide-react";

export function TimelineItem({ company, period, role, city, children, hasLine = true }: { company: string; period: string; role: string; city: string; children: React.ReactNode; hasLine?: boolean }) {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0 mt-1" />
                {hasLine && <div className="w-px bg-gray-200 dark:bg-gray-700 flex-1 mt-1" />}
            </div>
            <div className="pb-6 flex-1">
                <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold">{company}</h3>
                        <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-600">
                            <MapPin size={10} /> {city}
                        </span>
                    </div>
                    <span className="text-xs text-gray-500">{period}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{role}</p>
                <div className="text-xs text-gray-600 dark:text-gray-400">{children}</div>
            </div>
        </div>
    );
}
