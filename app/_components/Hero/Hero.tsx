import bg from "@/public/assets/hero.png";
import Link from "next/link";
import CTAButton from "../Buttons/CTAButton";

/**
 * Main hero section featuring a background image
 */
export default function Hero() {
  return (
    <section className="h-[700px] bg-black w-screen relative text-white text-center flex flex-col items-center justify-center bg-cover bg-top" style={{ backgroundImage: `url(${bg.src})` }}>
      <h1 className="text-white text-6xl font-display mb-4">Live Better Longer.</h1>
      <p className="text-neutral text-2xl font-light">Breakthrough genomics and action plans to help you look and feel your best.</p>

      <div className="absolute bottom-10">
        <CTAButton label="Stay in Touch" />
        <div className="mt-8">
          <Link href="/" className="text-white font-display underline text-2xl">Learn more about our test</Link>
        </div>
      </div>

    </section>
  );
}
