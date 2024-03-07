import { SectionProps } from "@/types";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

/**
 * Section
 * Renders a section with predefined styling
 */
export default function Section({ classNames, children, background }: SectionProps) {
  const sectionStyle = background ? { backgroundImage: `url(${background})` } : {};

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.container',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', stagger: 0.5,
        scrollTrigger: {
          trigger: '.container',
          start: 'top center+=300',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className={`md:p-20 p-10 ${background && "bg-cover"} ${classNames}`} style={sectionStyle}>
      <div className="container md:max-w-6xl max-w-lg m-auto">
        {children}
      </div>
    </section>
  );
}