import { User, Wrench, Layers, Briefcase, GraduationCap } from "lucide-react";
import { DiplomaCard } from "./components/DiplomaCard";
import { TimelineItem } from "./components/TimelineItem";
import { SkillTag } from "./components/SkillTag";
import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import { translations } from "./i18n/translations";

function App() {
    const { dark, toggle: toggleTheme } = useTheme();
    const { lang, toggle: toggleLang } = useLanguage();
    const t = translations[lang];

    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-y-auto font-space-mono">
            <div className="max-w-2xl mx-auto px-4 py-8">
                {/* Hero */}
                <div className="flex flex-col items-start justify-center pb-16 pt-8">
                    <div className="flex w-full justify-between items-start mb-2">
                        <h1 className="text-5xl font-bold">Victor Girault</h1>
                        <div className="flex items-center gap-2">
                            <LanguageToggle lang={lang} onToggle={toggleLang} />
                            <ThemeToggle dark={dark} onToggle={toggleTheme} />
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.subtitle}
                    </p>
                </div>

                {/* About */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-1">
                            <User
                                size={14}
                                className="text-gray-500 dark:text-gray-400"
                            />
                        </span>{" "}
                        {t.sections.about}
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-8">
                        {t.about}
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-1">
                            <Wrench
                                size={14}
                                className="text-gray-500 dark:text-gray-400"
                            />
                        </span>{" "}
                        {t.sections.skills}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <SkillTag name="TypeScript" />
                        <SkillTag name="React" />
                        <SkillTag name="Node.js" />
                        <SkillTag name="Python" />
                        <SkillTag name="PostgreSQL" />
                        <SkillTag name="Docker" />
                        <SkillTag name="Tailwind CSS" />
                        <SkillTag name="Git" />
                        <SkillTag name="RabbitMQ" />
                        <SkillTag name="Java" />
                        <SkillTag name="Spring Boot" />
                        <SkillTag name="CI/CD Pipeline" />
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-1">
                            <Briefcase
                                size={14}
                                className="text-gray-500 dark:text-gray-400"
                            />
                        </span>{" "}
                        {t.sections.experience}
                    </h2>
                    <div className="space-y-0">
                        {t.experience.map((job, i) => (
                            <TimelineItem
                                key={job.company}
                                company={job.company}
                                period={job.period}
                                role={job.role}
                                city={job.city}
                                hasLine={i < t.experience.length - 1}
                            >
                                {job.description.map((line, j) => (
                                    <span key={j}>
                                        {j > 0 && (
                                            <>
                                                <br />
                                                <br />
                                            </>
                                        )}
                                        &gt; {line}
                                    </span>
                                ))}
                            </TimelineItem>
                        ))}
                    </div>
                </section>

                {/* Diplomas */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-1">
                            <GraduationCap
                                size={14}
                                className="text-gray-500 dark:text-gray-400"
                            />
                        </span>{" "}
                        {t.sections.diplomas}
                    </h2>
                    <div className="space-y-2">
                        {t.diplomas.map((d) => (
                            <DiplomaCard
                                key={d.title}
                                title={d.title}
                                years={d.years}
                                school={d.school}
                            />
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-1">
                            <Layers
                                size={14}
                                className="text-gray-500 dark:text-gray-400"
                            />
                        </span>{" "}
                        {t.sections.projects}
                    </h2>
                    <div className="space-y-4">
                        {t.projects.map((p) => (
                            <ProjectCard
                                key={p.title}
                                title={p.title}
                                href={p.href}
                                description={p.description}
                            >
                                {p.tags.map((tag) => (
                                    <ProjectCard.Tag key={tag} name={tag} />
                                ))}
                            </ProjectCard>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <section className="mb-2 text-center border-t border-gray-200 dark:border-gray-800 pt-8 space-y-2">
                    <p className="text-gray-500 text-xs">
                        {t.footer.madeBy}{" "}
                        <a
                            href="https://github.com/VictorG53"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Victor
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}

export default App;
