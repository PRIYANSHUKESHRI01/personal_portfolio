import { Check } from "lucide-react";

const reasons = [
    "Clean, scalable, and maintainable code",
    "Real production-level experience",
    "Fast learning and quick problem-solving",
    "Strong focus on performance and user experience",
    "Reliable communication and delivery",
];

export const WhyChooseMe = () => {
    return (
        <section id="why-choose-me" className="py-32 relative overflow-hidden">
            {/* Bg glow */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            Why Work With Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            The difference{" "}
                            <span className="font-serif italic font-normal text-white">
                                you can count on.
                            </span>
                        </h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            I don't just write code — I take ownership, communicate clearly,
                            and deliver results that matter to your business.
                        </p>
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((reason, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in group flex items-start gap-4"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                                    <Check className="w-5 h-5 text-primary" />
                                </div>
                                <p className="text-sm font-medium leading-relaxed group-hover:text-primary transition-colors">
                                    {reason}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
