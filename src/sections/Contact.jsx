import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "priyanshukeshri2002@gmail.com",
    href: "mailto:priyanshukeshri2002@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7258005510",
    href: "tel:+917258005510",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 7258005510",
    href: "https://wa.me/917258005510",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/PRIYANSHUKESHRI01",
    href: "https://github.com/PRIYANSHUKESHRI01",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/priyanshu-keshri-1b86a230b",
    href: "https://www.linkedin.com/in/priyanshu-keshri-1b86a230b/",
  },
];

export const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        formRef.current.reset();
        setTimeout(
          () => setSubmitStatus({ type: null, message: "" }),
          4000
        );
      })
      .catch(() => {
        setIsLoading(false);
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Have a project in mind?{" "}
            <span className="font-serif italic font-normal text-white">
              Let's build it.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I'm open to freelance projects, full-time roles, and exciting
            collaborations. Drop me a message and let's build something impactful
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-semibold mb-6">Tell me about your project</h3>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project (features, timeline, budget...)"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <div>
                <Button
                  className="w-full"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Start a Project
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  ⚡ Usually responds within 24 hours
                </p>
              </div>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Open to Opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm actively looking for full-time roles and exciting projects.
                Whether you need a full-stack engineer or want to collaborate on
                an AI product — let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
