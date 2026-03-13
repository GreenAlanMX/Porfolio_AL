import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Data-Driven Performance",
    description:
      "Coming from a Data Engineering background, I optimize every query and API call to deliver lightning-fast experiences and accurate insights.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Scalable Architecture",
    description:
      "I build with the future in mind, using Docker and Linux to ensure that applications remain maintainable and performant as they grow.",
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
              Integration
              <span className="font-serif italic font-normal text-white">

                {" "}
                Specialist

              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full-Stack Developer and Data Engineer passionate about building digital products that are not just functional, but intelligent. My journey started with a deep curiosity about how data flows through the web, which led me to specialize in crafting scalable architectures where Frontend excellence meets Backend stability.
                Currently, I’m focused on AI Automation, where I’ve developed intelligent chatbots for companies like GAL, integrating LLMs with ERP systems using n8n. My expertise spans the entire stack: from designing sleek interfaces with React to managing high-performance Ubuntu Servers and optimizing complex SQL databases.
                I don’t just write code; I engineer workflows. Whether it’s dockerizing a backend service, securing a server via SSH, my goal is always the same: Technical excellence that drives business value.
              </p>
              <p>
                I focus on React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
             
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to transform complex data into delightful digital experiences — building 
                 products that users trust."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
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
