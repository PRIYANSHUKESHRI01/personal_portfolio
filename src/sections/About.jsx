import { Code2, Cpu, Rocket, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building scalable and production-ready web applications.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Integrating AI APIs to build intelligent features and automation.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Improving speed, scalability, and system efficiency.",
  },
  {
    icon: Trophy,
    title: "Problem Solving",
    description:
      "Solved 500+ DSA problems across multiple platforms.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science student and Full Stack Developer focused
                on building real-world, impactful applications.
              </p>
              <p>
                I specialize in Next.js, React, Node.js, and AI-powered systems.
                My approach is simple — build fast, scalable, and user-focused
                products that solve real problems.
              </p>
              <p>
                During my internship, I worked on a production-level application
                where I resolved real user issues, optimized performance, and
                collaborated with engineers in a live environment.
              </p>
              <p>
                I enjoy solving complex problems, improving system performance,
                and continuously learning new technologies in AI and system
                design.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build fast, scalable, and user-focused products
                that make a real difference — for clients, users, and businesses
                alike."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
