import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";
import { Subsection } from "../Section/Subsection";

/**
 * Backed by Science Section
 */
export default function BackedByScience() {
  const taglines = [
    {
      title: "20+",
      text: "Years of dedicated research in the field of aging and regenerative medicine."
    },
    {
      title: "12700+",
      text: "Citations from Peer-reviewed scientific papers authored by leading scientists of GenerationLab."
    },
    {
      title: "99%+",
      text: "Accuracy for measuring aging associated DNA methylation, powered by Illumina"
    },
  ];

  return (
    <Section classNames="text-center bg-gradient-to-r from-gold-1 to-gold-2">
      <SectionTitle title="Backed By Science" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {taglines.map((stat, index) => (
          <Subsection key={index} title={stat.title} text={stat.text} />
        ))}
      </div>
    </Section>
  );
}
