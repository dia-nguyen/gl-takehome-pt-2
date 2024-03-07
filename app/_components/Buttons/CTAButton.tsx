import { Button } from "@nextui-org/react";

/**
 * Call to action button
 */
export default function CTAButton({ label, classNames }: { label: string; classNames?: string }) {
  return (
    <Button radius="full" size="lg" className={`font-display text-xl p-5 md:text-3xl md:p-8 bg-primary-4 ${classNames}`} >
      {label}
    </Button>

  );
}