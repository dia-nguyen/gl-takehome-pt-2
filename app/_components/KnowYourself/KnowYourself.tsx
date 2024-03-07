import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";
import Link from "next/link";
import { Image } from "@nextui-org/react";

/**
 * Know Yourself Section
 */
export default function KnowYourself() {
  const taglines = [
    {
      title: "19  Functional BioAge",
      text: "Organ and function based Biological age in your body."
    },
    {
      title: "Your Aging Trajectory",
      text: "The predictable course or path of your aging follow over time."
    },
    {
      title: "Personalised Intervention",
      text: "Customised strategies or treatments based on your unique epigenetic information."
    }
  ]

  return (
    <Section background="/assets/backgrounds/gold-bg.png">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        <div className="col-span-1">

          <SectionTitle title="Get to know yourself better" />

          {taglines.map((tag, index) => (
            <span key={index}>
              <p className="font-bold mt-8">{tag.title}</p>
              <p>{tag.text}</p>
            </span>
        ))}
          <Link href="/" className="font-display text-xl mt-12 text-primary block underline">Learn more</Link>
        </div>

        <div className="col-span-2 md:mt-0 mt-12">
          <Image loading="lazy" src="/assets/know-yourself.png" alt="Know yourself" width={700} height={600} />
        </div>
      </div>

    </Section>
  );
}