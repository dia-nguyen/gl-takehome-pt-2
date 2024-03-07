import Image from "next/image";

/**
 * Renders either dark or light logo
 *
 * Props: type (string): "dark" | "light"
 */
export default function Logo({ type="dark" }: { type?: string; }) {
  if (type === "dark") {
    return (
      <Image src={`/assets/logo.svg`} alt="Generation Lab Logo" height={32} width={130} />
    );
  } else  {
    return (
      <Image src={`/assets/logo-light.svg`} alt="Generation Lab Logo" height={48} width={185} />
    )
  }
}