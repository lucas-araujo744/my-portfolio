import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/perfil.jpg";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-2xl opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
              <TypeAnimation
                sequence={[
                  "",
                  500,
                  personalInfo.title,
                  1000,
                  () => setTypingComplete(true)
                ]}
                wrapper="span"
                cursor={true}
                repeat={1}
                style={{ display: "inline-block" }}
                className="font-medium"
                speed={{ type: "keyStrokeDelayInMs", value: 80 }}
              />
            </h2>
            <p className="text-base md:text-lg text-foreground/80 max-w-lg mx-auto md:mx-0 mb-8">
              <span
                className={`transition-opacity duration-700 ${
                  typingComplete ? "opacity-100" : "opacity-0"
                }`}
              >
                {personalInfo.summary}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <a
                href="#contato"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium button-hover w-full sm:w-auto text-center"
              >
                Entre em contato
              </a>
              <a
                href="#projetos"
                className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-md font-medium hover:bg-secondary/80 button-hover w-full sm:w-auto text-center"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <div className="w-[60%] sm:w-1/2 md:w-auto md:max-w-md lg:max-w-lg opacity-0 animate-fade-in animation-delay-300">
            <div className="w-full aspect-square bg-card rounded-full overflow-hidden shadow-xl mx-auto border-4 border-border">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in animation-delay-500">
        <a
          href="#sobre"
          className="p-2 rounded-full border border-border hover:border-primary transition-all"
          aria-label="Role para baixo"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
