export interface SectionProps {
  classNames?: string;
  children: React.ReactNode;
  background?: string;
}

export interface JourneyCardProps  {
  icon: string;
  image?: string;
  title: string;
  text: string;
}

export interface TestimonialCardProps {
  name: string;
  subtitle: string;
  message: string;
}

export interface SubsectionProps {
  title: string;
  text: string;
}