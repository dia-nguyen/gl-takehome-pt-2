import { TESTIMONIALS_DATA } from "@/app/_utils/data";
import TestimonialCard from "./TestimonialCard";

/**
 * Testmonial Section
 */
export default function Testimonials() {
  return (
    <section className="p-10 md:pl-20 md:pr-0 md:pb-[350px] relative ">
      <div className="flex gap-5 overflow-x-scroll pb-5 absolute w-full h-fit mb-20">
        {TESTIMONIALS_DATA.map((testimonial) => (
          <TestimonialCard key={testimonial.name} name={testimonial.name} message={testimonial.message} subtitle={testimonial.subtitle} />
        ))}
      </div>

    </section>
  );
}
