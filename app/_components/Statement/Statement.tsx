import CTAButton from "../Buttons/CTAButton";
import Logo from "../Logo/Logo";
import Section from "../Section/Section";
import AnimatedText from "../AnimatedText/AnimatedText";

/**
 * Statement Section
 */
export default function Statement() {
  const impacts = ["Lifestyle", "Medication", "Diet", "Therapy"];

  return (
    <Section classNames="bg-gradient-to-r to-gradient-end from-gradient-start text-white">
      <div className="m-auto grid grid-cols-1 md:grid-cols-3 w-full gap-0 md:gap-44">

        <div className="col-span-2">
          <h2 className="text-4xl md:text-6xl mb-4 font-thin">We track the <br /> impact of your <AnimatedText words={impacts} /></h2>
          <p className="text-lg">Generation Lab, created by leading longevity scientists, provides personalized insights and plans to measure, track, and address the effects of aging. Our tailored action plans aim to reverse aging, prevent disease, and enhance overall well-being.</p>
        </div>

        <div className="flex flex-col items-center justify-between col-span-1 md:gap-0 gap-10 md:mt-0 mt-10">
          <Logo type="light" />
          <CTAButton label="Order test now" />
        </div>
      </div>
    </Section >
  );
}

