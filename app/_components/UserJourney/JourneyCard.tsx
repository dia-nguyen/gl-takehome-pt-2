import { JourneyCardProps } from "@/types";
import { Image } from "@nextui-org/react";

/**
 * Renders individual journey card
 */
export default function JourneyCard({ icon, image, title, text }: JourneyCardProps) {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative mb-10">
        <div className="rounded-full lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]" style={{ backgroundImage: `url(${image})` }}></div>

        <div className="rounded-full flex items-center justify-center lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] bg-gradient-to-r from-gold-1 to-gold-2 mb-10 p-5 absolute top-0 hover:opacity-0 transition-opacity ease-in-out duration-500"
        >
          <Image src={icon} alt={title} className="max-h-[100px] max-w-[100px] " height={80} width={80} loading="lazy" />
        </div>
      </div>


      <h4 className="font-display text-xl md:text-2xl mb-2">{title}</h4>
      <p>{text}</p>
    </div>
  );
}
