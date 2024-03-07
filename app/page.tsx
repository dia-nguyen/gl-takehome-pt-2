"use client";

import { NextUIProvider } from "@nextui-org/react";
import Hero from "./_components/Hero/Hero";
import Navigation from "./_components/Navigation/Navigation";
import Statement from "./_components/Statement/Statement";
import KnowYourself from "./_components/KnowYourself/KnowYourself";
import Partnership from "./_components/Partnership/Partnership";
import AgeTrajectory from "./_components/AgeTrajectory/AgeTrajectory";
import BackedByScience from "./_components/BackedByScience/BackedByScience";
import UserJourney from "./_components/UserJourney/UserJourney";
import SubscriptionPlan from "./_components/SubscriptionPlan/SubscriptionPlan";
import Testimonials from "./_components/Testimonials/Testimonials";
import GoldSection from "./_components/Section/GoldSection";

export default function Home() {
  return (
    <NextUIProvider>
      <Navigation />
      <Hero />
      <Statement />
      <Partnership />
      <KnowYourself />
      <AgeTrajectory />
      <BackedByScience />
      <UserJourney />
      <GoldSection>
        <SubscriptionPlan />
        <Testimonials />
      </GoldSection>
    </NextUIProvider>
  );
}
