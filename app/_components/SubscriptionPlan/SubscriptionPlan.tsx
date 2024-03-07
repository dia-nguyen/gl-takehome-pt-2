import Image from "next/image";
import CTAButton from "../Buttons/CTAButton";
import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";
import SubscriptionCards from "./SubscriptionCards";


export default function SubscriptionPlan() {

  return (
    <Section classNames="text-center">
      <SectionTitle title="Subscription Plans" />
      <SubscriptionCards />

      <p className="text-2xl mb-5 mt-24">Free Cancellation after 3 months</p>
      <CTAButton classNames="bg-primary text-neutral" label="Order test now"/>
      <p className="font-display text-xl mt-5 flex items-center justify-center gap-3"><Image src="/assets/icons/checkmark-o.svg" className="inline-block" alt="checkmark" height={20} width={20} /> FSA/HSA eligible</p>
    </Section>
  );
}