export default function SectionTitle({ title }: { title: string; }) {
  return (
    <h2 className="font-display text-3xl md:text-5xl mb-6">{title}</h2>
  );
}