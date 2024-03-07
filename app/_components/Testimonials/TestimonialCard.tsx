import { TestimonialCardProps } from "@/types";
import { Image } from "@nextui-org/react";

/**
 * Renders individual testimonial card
 */
export default function TestimonialCard({ name, subtitle, message }: TestimonialCardProps) {
  return (
    <div className="rounded-xl drop-shadow-lg border bg-white border-primary p-8 w-[300px] flex-shrink-0">
      <Image src="/assets/icons/quote.svg" alt="Quote" width={67} height={47} />
      <p className="text-xl font-bold mt-2">
        {message}
      </p>

      <p className="font-medium mt-24">{name}</p>
      <p className="text-sm mt-5">{subtitle}</p>
    </div>
  );
}
