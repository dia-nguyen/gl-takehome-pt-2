import { Image } from "@nextui-org/react";
import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";

/**
 * Age Trajectory Section
 */
export default function AgeTrajectory() {
  return (
    <Section>
      <SectionTitle title="Action Plans with You in Mind" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-xl md:text-3xl font-display"> We provide aging action plans, monitor progress, with visible changes possible within <span className="bold">2 months.</span></p>
          <p className="text-sm md:text-lg mt-5">We all age differently, influenced by our body&apos;s &apos;biological noise&apos;. Using your epigenetic insight to identify biomarkers for aging and disease, we can uniquely assess the level of &apos;noise&apos; and rate of aging.</p>
        </div>
        <Image src="/assets/aging-trajectory.png" alt="Know yourself" width={500} height={400}/>
      </div>
    </Section>
  );
}