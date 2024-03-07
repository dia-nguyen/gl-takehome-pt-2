import { USER_JOURNEY_DATA } from "@/app/_utils/data";
import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";
import JourneyCard from "./JourneyCard";

/**
 * User Journey Section
 */
export default function UserJourney() {
  return (
    <Section classNames="text-center">
      <SectionTitle title="Start Your Journey to Longevity Today" />
      <p className="md:text-2xl">The journey to living a longer, healthier life starts with a simple cheek swab.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 mt-10">
        {USER_JOURNEY_DATA.map((item) => (
          <JourneyCard key={item.title} image={item.image} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </Section>
  );
}
