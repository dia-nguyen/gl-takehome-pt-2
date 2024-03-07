import { SubsectionProps } from "@/types";
import SectionTitle from "../Section/SectionTitle";

export function Subsection({ title, text }:SubsectionProps) {
  return (
    <div className="text-center">
      <SectionTitle title={title} />
      <p className="md:text-lg">{text}</p>
    </div>
  );
}