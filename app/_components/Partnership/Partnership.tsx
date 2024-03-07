import Section from "../Section/Section";
import Image from "next/image";

/**
 * Partnerships Section
 * Renders a list of partner logos
 */
export default function Partnership() {
  const logoPaths = Array.from({ length: 9 }, (_, index) => `/assets/partners/logo${String(index + 1)}.png`);

  return (
    <Section classNames="text-center">
      <h3 className="text-3xl font-display">Backed by</h3>

      <div className="flex flex-wrap items-center justify-center gap-10 mt-8">
        {logoPaths.map((logoPath, index) => (
          <Image key={index} src={logoPath} alt={`Logo ${index + 1}`} className="h-[50px] w-auto" width={50} height={50} />
        ))}
      </div>
    </Section>
  );
}