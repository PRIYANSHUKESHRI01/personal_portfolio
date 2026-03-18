import { Globe, Cpu, Zap, Wrench } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Application Development",
        description:
            "I build fast, scalable, and modern web applications tailored to your business needs.",
    },
    {
        icon: Cpu,
        title: "AI Integration",
        description:
            "Integrate AI features like chatbots, automation, and intelligent analytics into your product.",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description:
            "Improve your application speed, loading time, and scalability.",
    },
    {
        icon: Wrench,
        title: "Bug Fixing & Debugging",
        description:
            "Fix critical issues and improve system stability in production environments.",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        What I can{" "}
                        <span className="font-serif italic font-normal text-white">
                            do for you.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        From idea to deployment — I help businesses and startups build
                        products that perform, scale, and deliver results.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in group"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
