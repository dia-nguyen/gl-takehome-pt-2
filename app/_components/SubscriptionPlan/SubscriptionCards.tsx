
"use client";

import Image from "next/image";
import { useState, useRef, createRef } from "react";
import gsap from "gsap";
import { PLANS_DATA } from "@/app/_utils/data";

/**
 * Subscription Plan Section
 */
export default function SubscriptionCards() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    gsap.to(`#benefits-${index}`, {
      maxHeight: 500,
      overflow: "visible",
      duration: 0.2,
      ease: 'power3.out',
      opacity: 1,
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    gsap.to(`#benefits-${index}`, {
      maxHeight: 0,
      duration: 0.2,
      opacity: 0,
      ease: 'power3.in',
    });
  };

  const testBenefits = [
    "Identify the 460+ Gene markers that cause aging",
    "Assess your aging of your 9 system and organs",
    "Track progress and impact of aging intervention plan",
  ];

  const interventionBenefits = [
    "Expert insight on your aging progress",
    "Actionable intervention plans for healthier aging",
    "Our app keep you accountable",
  ];

  const benefitsRefs = useRef([]);
  benefitsRefs.current = PLANS_DATA.map((_, i) => benefitsRefs.current[i] ?? createRef());

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-items-center md:justify-items-start" id="card">
      {PLANS_DATA.map((plan, index) => (
        <div
          key={plan.name}
          className={
            `${plan.background === "light" ? "bg-primary-5 md:justify-self-end" : "bg-primary-3 md:justify-self-start"}
            max-w-sm rounded-[50px] overflow-hidden shadow-lg text-left self-start`
          }
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >

          <div className={`p-8 text-3xl ${plan.background === "dark" && "text-white"}`} style={{ backgroundImage: `url("/assets/backgrounds/${plan.background}.png")` }}>
            <p className="mb-2">{plan.name}</p>
            <div className="text-right">
              <p className="mb-2">${plan.initialCost} <span className="text-medium align-middle">First month</span></p>
              <p>${plan.monthlyCost}/mo</p>
            </div>
          </div>

          <div className={`px-8 pt-5 `}>
            <p className="font-bold mb-3">Biological aging measurement test</p>
            <ul className="leading-10 mb-5">
              <li><span className="text-3xl">{plan.perks.swabs} </span> Home swab tests/year</li>
              <li><span className="text-3xl">{plan.perks.reports} </span> Biological aging reports / year </li>
              <li><span className="text-3xl">{plan.perks.geneSites}k </span> Gene sites</li>
            </ul>

          </div>
          <div
            id={`benefits-${index}`}
            className="benefits-container"
            style={{ maxHeight: hoveredIndex === index ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-out' }}
          >
            <SubcriptionBenefits benefits={testBenefits} />
          </div>

          <div className={`px-8 py-5 ${plan.background === "light" ? "bg-primary-5 md:justify-self-end" : "bg-primary-3 md:justify-self-start"}`}>
            <p className="font-bold mb-3">Actionable intervention plans</p>
            <p><span className="text-3xl">{plan.perks.interventionPlans} </span> Online longevity consultations / year</p>
            <p className="text-sm mt-5"><span className="font-bold">Unlimited</span> access to our actionable intervention palns based on leading science research </p>
          </div>

          <div
            id={`benefits-${index}`}
            className="benefits-container"
            style={{ maxHeight: hoveredIndex === index ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-out' }}
          >
            <SubcriptionBenefits benefits={interventionBenefits} />
          </div>
        </div>
      ))}
    </div>
  );
}


function SubcriptionBenefits({ benefits }: { benefits: string[]; }) {
  return (
    <ul className="bg-white px-8 py-5">
      {benefits.map((benefit, index) => (
        <li key={index} className=" mb-2 flex gap-5"><Image src="/assets/icons/checkmark.svg" alt="checkmark" height={20} width={20} /> {benefit}</li>
      ))}
    </ul>
  );
}