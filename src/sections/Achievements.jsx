import { Trophy, Code2, Users } from "lucide-react";

const achievements = [
    {
        icon: Code2,
        title: "500+ DSA Problems Solved",
        description:
            "Consistently solved algorithmic challenges on LeetCode, GeeksforGeeks, and Codeforces — covering arrays, trees, graphs, DP, and more.",
        tags: ["LeetCode", "GFG", "Codeforces"],
    },
    {
        icon: Trophy,
        title: "Finalist — Odoo × Adani Hackathon 2026",
        description:
            "Selected as a finalist in the Odoo × Adani Hackathon 2026, competing against top teams to build impactful software solutions.",
        tags: ["Hackathon", "Finalist", "2026"],
    },
    {
        icon: Users,
        title: "Smart India Hackathon — Team Lead",
        description:
            "Participated in and led a team at Smart India Hackathon (SIH), one of India's largest national-level innovation competitions.",
        tags: ["SIH", "Team Lead", "Innovation"],
    },
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Achievements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Milestones that{" "}
                        <span className="font-serif italic font-normal text-white">
                            define the journey.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        From competitive programming to national-level hackathons — a track
                        record of consistent learning and performance.
                    </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {achievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in group"
                            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
